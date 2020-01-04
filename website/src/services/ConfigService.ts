import Axios, { AxiosResponse } from "axios";
import { FooterModel } from "../model/FooterModel";
import { BaseModel } from "../model/BaseModel";

export default class ConfigService {

    public getFooter(): Promise<FooterModel[]> {   
        return new Promise<FooterModel[]>((resolve, reject) => {
            Axios.get(`${window.location.origin}/config/footer.json`)
            .then((response) => {
                console.log(response);
                resolve(response.data);
            })
            .catch((error) => {
                reject(error)
            })
        });
    }

    // TODO
    public getNavigation(): Promise<any[]> {
        return new Promise<any[]>((resolve, reject) => {
            Axios.get(`${window.location.origin}/config/navigation.json`)
            .then((response) => {
                resolve(response.data);
            })
            .catch((error) => {
                reject(error)
            })
        });
    }

    public getPage(): Promise<BaseModel[]> {

        let path: string = window.location.pathname.substr(1);
		if(path == "") {
			path = "home";
		}

        return new Promise<BaseModel[]>((resolve, reject) => {
            Axios.get(`${window.location.origin}/config/${path}.json`)
            .then((response) => {
                resolve(response.data);
            })
            .catch((error) => {
                reject(error)
            })
        });
    }

}