import { Injectable } from '@angular/core';
 
@Injectable()
export class ScrollTopService {
 
    private scrollLink: HTMLElement;

    constructor() { }
 
    setScrollLink(scrollLink: HTMLElement): void {
        this.scrollLink = scrollLink;
    }

    scrollToTop(): void {
		// scroll to the top
		this.scrollLink.click();
		console.log("Scrolled");
	}
}