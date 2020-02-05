import { NgModule } from '@angular/core';
import { MdInputModule } from '@angular/material';

import { MyDatePickerModule } from 'mydatepicker';

import { SharedModule } from '../shared/shared.module';
import { FileUploadModule } from 'ng2-file-upload/file-upload/file-upload.module';
import { AuthGuard } from '../guards/auth.guard';
import { requestOptionsProvider } from '../default-request-options.service';
import { CreateComponent } from './create/create.component';
import { QuestionViewComponent } from './view/view.component';
import { ViewQuestionService } from './view/view.service';
import { CreateAdvertiseService } from '../advertise/advertise.service';
import { GetPublishersService } from '../advertise/services/get-publisher.service';
import { UpdateQuestionService } from './shared//update.service';
import { QuestionReviewComponent} from './review//review.component';
import { ReviewQuestionService } from './review//review.service';
import { QuestionSizeService } from './review//size.service';
import { QuestionCategorySizeService } from './review/categorysize.service';
import { CreateQuestionService } from './create/create.service';
import { AdvertiseComponent } from '../advertise/advertise.component';
import { AdvertiseModule } from '../advertise/advertise.module';
import { AdvertiseQuestionsListComponent } from './list/list_adquestions.component';
import { StatisticsQuestionsListComponent } from './statistics/list_statquestions.component';
import { ListStatisticsQuestionService } from './statistics/list_statquestions.service';
import { ListAdvertiseQuestionService } from './list/list_adquestions.service';
import { FindByIdQuestionsListComponent } from './identifier/list_idquestions.component';
import { ListFindByIdQuestionService } from './identifier/list_idquestions.service';
import { UploadedFileService } from './review/uploadedFile.service';



import { QuestionRoutingModule } from './question-routing.module';
import {SearchService} from "../user/search/search.service";

@NgModule({
  imports: [
    SharedModule,
    FileUploadModule,
    QuestionRoutingModule,
    AdvertiseModule,
    MdInputModule,
    MyDatePickerModule,
    // AdvertiseComponent,
  ],
  declarations: [ QuestionViewComponent, QuestionReviewComponent, CreateComponent, AdvertiseQuestionsListComponent , StatisticsQuestionsListComponent ,FindByIdQuestionsListComponent  ],
  providers: [ SearchService,UploadedFileService , requestOptionsProvider, AuthGuard, ViewQuestionService, UpdateQuestionService, ReviewQuestionService, QuestionSizeService, QuestionCategorySizeService, CreateQuestionService, CreateAdvertiseService, GetPublishersService, ListAdvertiseQuestionService ,ListStatisticsQuestionService ,ListFindByIdQuestionService],
  // exports: [ AdvertiseComponent ],
})
export class QuestionModule { }
