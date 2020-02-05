import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';
import { RequestOptions, Headers, Http, Response } from '@angular/http';
import { ProgressBarService } from '../../core/progress-bar/progress-bar.service';
import { IMyOptions, IMyDateModel, IMyDate } from 'mydatepicker';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

import { ReviewQuestionService } from './review.service';
import { QuestionCategorySizeService } from './categorysize.service';
import { QuestionSizeService } from './size.service';
import { UploadedFileService } from './uploadedFile.service';
import { QuestionSize, QuestionCategorySize } from './size.model';
import { StateModel, UploadedFile } from './review.model';
// import { UpdateQuestionService } from '../shared/update.service';

import { QuestionView } from '../shared/view.model';
import { QuestionPreReviewUploadURL,
         QuestionConfirmationUploadURL,
         QuestionConfirmationDownloadURL,
         QuestionPreReviewDownloadURL,
         QuestionPreReviewIndexURL,
         QuestionConfirmationIndexURL } from '../../config';

import { FileItem,FileUploader } from 'ng2-file-upload/ng2-file-upload';


@Component({
 	selector: 'app-question-review',
 	templateUrl: './review.component.html',
 	styleUrls: [ './review.component.css' ]
})

export class QuestionReviewComponent implements OnInit {
    mytuple: { title: string, engtitle: string, id: number };
    showErr: Boolean = false;
    questionview: QuestionView;
    valid: Boolean = false;
    showTable: Boolean = true;
    isConfirmation: Boolean = false;

    public mode: string = 'determinate';
    public uploadedQuestion: string = 'determinate';
    value: number = 100;
    // spinnerValue = 100;
    // spinnerColor: string = 'accent';

    SelectMode: string = 'ارزیابی';
    Modes: Array<{ value: string }> = [
        {value: 'ارزیابی'},
        {value: 'پیش ارزیابی'},
        {value: 'وضعیت بارگذاری سوالات'}
    ]

    Categories: Array<{ title: string, engtitle: string, id: number }> = [
        {title: ' همه', engtitle: "all", id: 0},
        {title: ' سینما', engtitle: "cinema", id: 2},
        {title: " برنامه های تلویزیونی", engtitle: "TV", id: 3},
        {title: " ادبیات", engtitle: "literature", id: 4},
        {title: "موسیقی", engtitle: "music", id: 6},
        {title: "تاریخ", engtitle: "history", id: 9},
        {title: "زبان انگلیسی", engtitle: "english", id: 10},
        {title: "تکنولوژی", engtitle: "technology", id: 12},
        {title: "علم و دانش", engtitle: "science", id: 13},
        {title: "جغرافیا", engtitle: "geography", id: 17},
        {title: "فرهنگ و هنر", engtitle: "art", id: 20},
        {title: "بازیهای کامپیوتری", engtitle: "computer_game", id: 22},
        {title: "اطلاعات عمومی", engtitle: "general_knowledge", id: 23},
        {title: "ورزشی", engtitle: "sport", id: 29},
        {title: "طبیعت", engtitle: "nature", id: 41},
        {title: "مذهبی", engtitle: "religious", id: 88},
        {title: "ریاضی و هوش", engtitle: "math", id: 139},
        {title: "لوگو و سرگرمی", engtitle: "logo", id: 140},
        {title: "غذا و نوشیدنی", engtitle: "food", id: 141},
        {title: "فوتبال ", engtitle: "football", id: 142},
    ]

    Category_size: Array<{ title: string, engtitle: string, id: number, size: number }> = [
        {title: ' همه', engtitle: "all", id: 0, size: 0},
        {title: ' سینما', engtitle: "cinema", id: 2, size: 0},
        {title: " برنامه های تلویزیونی", engtitle: "TV", id: 3, size: 0},
        {title: " ادبیات", engtitle: "literature", id: 4, size: 0},
        {title: "موسیقی", engtitle: "music", id: 6, size: 0},
        {title: "تاریخ", engtitle: "history", id: 9, size: 0},
        {title: "زبان انگلیسی", engtitle: "english", id: 10, size: 0},
        {title: "تکنولوژی", engtitle: "technology", id: 12, size: 0},
        {title: "علم و دانش", engtitle: "science", id: 13, size: 0},
        {title: "جغرافیا", engtitle: "geography", id: 17, size: 0},
        {title: "فرهنگ و هنر", engtitle: "art", id: 20, size: 0},
        {title: "بازیهای کامپیوتری", engtitle: "computer_game", id: 22, size: 0},
        {title: "اطلاعات عمومی", engtitle: "general_knowledge", id: 23, size: 0},
        {title: "ورزشی", engtitle: "sport", id: 29, size: 0},
        {title: "طبیعت", engtitle: "nature", id: 41, size: 0},
        {title: "مذهبی", engtitle: "religious", id: 88, size: 0},
        {title: "ریاضی و هوش", engtitle: "math", id: 139, size: 0},
        {title: "لوگو و سرگرمی", engtitle: "logo", id: 140, size: 0},
        {title: "غذا و نوشیدنی", engtitle: "food", id: 141, size: 0},
        {title: "فوتبال ", engtitle: "football", id: 142, size: 0},
    ];

    public uploadStat: Array<{ name: string, accepted: number, rejected: number, corrupted: number }>


    public confirmation_url: string = QuestionConfirmationDownloadURL;
    public confirmation_index_url: string = QuestionConfirmationIndexURL;
    public prereview_url: string = QuestionPreReviewDownloadURL;
    public prereview_index_url: string = QuestionPreReviewIndexURL;
    public uploader: FileUploader = new FileUploader({url: QuestionPreReviewUploadURL});
    public confirmation_uploader: FileUploader = new FileUploader({url: QuestionConfirmationUploadURL});
    public hasBaseDropZoneOver: boolean = false;
    public accepted: number = 0;
    public rejected: number = 0;
    public corrupted: number = 0;
    public hasAnotherDropZoneOver: boolean = false;
    public categorySize: QuestionCategorySize [];
    // public confirmation_size : QuestionSize;
    // public prereview_size : QuestionSize;
    public counter_prev: number;
    public counter_conf: number;
    public confirmation_mode: string = "confirmation";
    public prereview_mode: string = "prereview";
    public prereview_status: string = "WAITING_FOR_PREREVIEW";
    public confirmation_status: string = "WAITING_FOR_CONFIRMATION";

    public states: StateModel[] = [];
    public uploaded_files: UploadedFile[] = [];

    constructor(private reviewQuestionService: ReviewQuestionService,
                private progressBarService: ProgressBarService,
                private getCategorySize: QuestionCategorySizeService,
                private getsize: QuestionSizeService,
                private uploadedFileService: UploadedFileService,
                private http: Http,
                private route: ActivatedRoute,
                private location: Location) {
    }

    ngOnInit(): void {
        this.uploadedQuestion = "query";
        this.uploadedFileService.getUploadedFileService()
            .then(uploaded_files => {
                this.uploadedQuestion ="determinate";
                this.uploaded_files = uploaded_files;
            } );

    }

    public fileOverBase(e: any): void {
        this.hasBaseDropZoneOver = e;
    }

    public fileOverAnother(e: any): void {
        this.hasAnotherDropZoneOver = e;
    }

    download(page: string, url: string, url_index: string, mode: string, category: string, engtitle: string) {
        this.reviewQuestionService.download(+page, url, url_index, mode, +category, engtitle)
            .subscribe((res) => console.log("success"));
    }

    get_size(status: string, category: number) {
        if (category != 0) {
            this.route.params
                .switchMap((params: Params) => this.getsize.getsize(status, category))
                .subscribe((size_result) => {
                    if (status === this.prereview_status) {
                        this.counter_prev = size_result
                    }
                    if (status === this.confirmation_status) {
                        this.counter_conf = size_result
                    }
                });

        }
    }

    get_size_category(status: string): void {
        var result: number;
        this.route.params
            .switchMap((params: Params) => this.getCategorySize.getsize(status))
            .subscribe((category_size) => {
                this.categorySize = category_size
            });


    }

    get_size_for_all() {


        this.get_size_category(this.confirmation_status);
        //     for (var i=0; i<this.Category_size.length; i++){
        //       this.route.params.de
        //         .switchMap((params: Params) => this.getsize.getsize(this.confirmation_status, this.Category_size[i].id))
        //         .subscribe( (size_result) => {if(status === this.prereview_status) {  this.Category_size[i].size = size_result }
        //                                     if(status === this.confirmation_status) { this.Category_size[i].size = size_result }});

    }

    goBack(): void {
        this.location.back();
    }

    uploadFile(file: FileItem, index: number): void {
        this.mode = "query";
        file.upload();
        this.states = [];
        this.confirmation_uploader.response.subscribe(
            res => {
                this.mode = 'determinate';
                    // let json = JSON.parse(res);
                    this.states.push(new StateModel(file.file.name,  'موفق'));
                    // let log_name = "log_" + file.file.name;
                    // this.reviewQuestionService.downloadFile(json.corrupted, log_name);
                    // this.value = 100;

            }
        )
    }
}
