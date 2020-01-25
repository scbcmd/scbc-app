import { BaseModel } from "../model/BaseModel";
import Event from "../Event";
import ConfigService from "./ConfigService";
import { ImageModel } from "../model/ImageModel";

export default class PageService {

    private static instance: PageService;
    private pages: Record<string, BaseModel[]> = {};
    private readonly onPageChange: Event<BaseModel[]> = new Event<BaseModel[]>();

    public get pageChange() { return this.onPageChange.expose(); } 

    private constructor() {
        window.onpopstate = (e: any) => {
            this.getCurrentPage()
            .then(models => {
                this.onPageChange.invoke(models);
            });
		}
    }

    public static getInstance(): PageService {
        if(this.instance == null) {
            this.instance = new PageService();
        }
        return this.instance;
    }

    public changePage(path: string) {
        window.history.pushState(null, document.title, path);

        this.getCurrentPage()
        .then(models => {
            this.onPageChange.invoke(models);
        })
    }

    private getPath(): string {
		let path: string = window.location.pathname.substr(1);
		if(path === "") {
			path = "home";
        }
		return path;
    }
    
    public getCurrentPage(): Promise<BaseModel[]> {
        const path = this.getPath();

        return new Promise<BaseModel[]>((resolve, reject) => {
            if(this.pages[path] !== undefined && this.pages[path] !== null ) resolve(this.pages[path]);
            else {
                ConfigService.getInstance().getPage(path)
                .then((result) => {
                    this.pages[path] = result;
                    resolve(this.pages[path]);
                }).catch((error) => {
                    console.log(error.response);
                    this.pages[path] = [new ImageModel("images/one-way.jpg", "rgba(22,69,89,0.5)", `<h1>${error.response.status} ${error.response.statusText}</h1>
                    <h2>Looks like this page needs Jesus</h2>
                    <p>"For the Son of Man came to seek and to save the lost."</p>
                    <p>- Luke 19:10</p>`)];
                    resolve(this.pages[path]);
                });
            }
        });
	}
}