/* eslint-disable no-console */
import { LightningElement, api, track } from 'lwc';
 
export default class Qsyd_ModalCmp extends LightningElement {
    @api size = "medium";

    @api
    toggleModal() {
        let backdrop = this.template.querySelector(".slds-backdrop");
        backdrop.classList.toggle("slds-backdrop_open");

        let modal = this.template.querySelector(".slds-modal");
        modal.classList.toggle("slds-fade-in-open");

        if(this.size === "small") {
            modal.classList.add("slds-modal_small");
        }
        else if(this.size === "large") {
            modal.classList.add("slds-modal_large");
        }
        else {
            modal.classList.add("slds-modal_medium");
        }
    }

    handleHeaderSlotChange(event) {
        this.template.querySelector("header").classList.add("slds-modal__header");
    }

    handleFooterSlotChange(event) {
        this.template.querySelector("footer").classList.add("slds-modal__footer");
    }
}