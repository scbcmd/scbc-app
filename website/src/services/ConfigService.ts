import Axios from "axios";
import { FooterModel } from "../model/FooterModel";
import { BaseModel } from "../model/BaseModel";
import AlertModel from "../model/AlertModel";

export default class ConfigService {

    private static instance: ConfigService;

    private constructor() {

    }

    public static getInstance(): ConfigService {
        if(this.instance == null) {
            this.instance = new ConfigService();
        }
        return this.instance;
    }

    public getFooter(): Promise<FooterModel[]> {   
        return new Promise<FooterModel[]>((resolve, reject) => {
            Axios.get(`${window.location.origin}/config/footer.json`)
            .then((response) => {
                resolve(response.data);
            })
            .catch((error) => {
                reject(error)
            })
        });
    }

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

    public getPage(path: string): Promise<BaseModel[]> {

        return new Promise<BaseModel[]>((resolve, reject) => {
            const fullpath = `${window.location.origin}/config/${path}.json`;
            Axios.get(fullpath)
            .then((response) => {
                resolve(response.data);
            })
            .catch((error) => {
                reject(error)
            })
        });
    }

    public getAlerts(): Promise<AlertModel[]> {
        return new Promise<AlertModel[]>((resolve, reject) => {
            Axios.get(`${window.location.origin}/config/alerts.json`)
            .then((response) => {
                resolve(response.data);
            })
            .catch((error) => {
                reject(error)
            })
        });
    }
}