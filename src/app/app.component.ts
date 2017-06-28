import {Component, OnInit} from "@angular/core";
import {TranslateService} from '@ngx-translate/core';

@Component({
    selector: "app",
    templateUrl: "./app/app.html"
})

export class AppComponent implements OnInit {
    ngOnInit() {
        console.log("Application component initialized ...");
    }

    constructor(private translate: TranslateService) {
        translate.addLangs(["en", "fr"]);
        translate.setDefaultLang('en');

        let browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
    }
}