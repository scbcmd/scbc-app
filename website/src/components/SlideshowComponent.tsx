import React, { ReactElement } from 'react';
import { SlideshowModel } from '../model/SlideshowModel';
import {Paginator} from 'primereact/paginator';
import { BaseComponent } from './BaseComponent';
import UUID from "uuid";
import '../stylesheets/SlideshowComponent.css';

interface SlideshowComponentProps {
    key?: number;
    model: SlideshowModel;
    className?: string;
    style?: any
}

interface SlideshowComponentState {
    index: number;
    previousIndex: number;
    manuallySelected: boolean;
}

export class SlideshowComponent extends React.Component<SlideshowComponentProps, SlideshowComponentState> {

    interval: any;
    id: string;

    constructor(props: SlideshowComponentProps){
        super(props);
        this.state = {
            index: 0,
            previousIndex: 0,
            manuallySelected: false
        }
        this.id = UUID();
        this.onSlideChange = this.onSlideChange.bind(this);
        this.changeSlide = this.changeSlide.bind(this);
    }

    componentDidMount() {
        this.interval = window.setInterval(() => {
            if(!this.state.manuallySelected){
                this.changeSlide(this.getNextIndex());
            }
        }, 5000);
    }

    componentWillUnmount(){
        window.clearInterval(this.interval);
    }

    private onSlideChange(event: any) {
        this.setState({
            manuallySelected: true
        })
        this.changeSlide(event.page);
    }

    private changeSlide(index: number){
        this.setState({
            previousIndex: this.state.index,
            index: index
        });
        const rootElement = document.getElementById(this.id) as HTMLElement;
        const element = rootElement.children[1] as HTMLElement;
        element.style.opacity = "0";
        let fadeEffect = setInterval(function () {
            let opacity: number = parseFloat(element.style.opacity as string);
            if (opacity <= 1) {
                element.style.opacity = (opacity + 0.03).toString();
            } else {
                clearInterval(fadeEffect);
                element.style.opacity = "1";
            }
        }, 10);
    }

    private getNextIndex(): number {
        if(this.state.index == this.props.model.slides.length - 1) return 0;
        return this.state.index + 1;
    }

    public render(): ReactElement {

        const elements: ReactElement[] = [];
        for(let i = 0; i < this.props.model.slides.length; i++){
            elements.push(<BaseComponent model={this.props.model.slides[i]} key={i} style={{width: "100vw", padding: "30px"}}/>)
        }

        return <React.Fragment>
            <div className="slideshow" id={this.id}>
                <div className="previousSlide">
                    <BaseComponent model={this.props.model.slides[this.state.previousIndex]}/>
                </div>
                <div className="currentSlide" style={{opacity: 0}}>
                    <BaseComponent model={this.props.model.slides[this.state.index]}/>
                </div>

                <div className="hiddenContent">
                    {elements}
                </div>
                <Paginator first={this.state.index} rows={1} totalRecords={this.props.model.slides.length} onPageChange={this.onSlideChange}
                        template="FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"/>
            </div>
        </React.Fragment>
    }
}