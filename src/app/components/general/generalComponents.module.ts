import { NgModule } from "@angular/core";
// import ionic module if plan to use ionic components
import { IonicModule } from "@ionic/angular";
import { IntroductionComponent } from "./introduction/introduction";
import { GlossaryLinkComponent } from "./glossary/glossary-link/glossary-link";
import { GlossaryListComponent } from "./glossary/glossary-list";
import { GlossaryDetailComponent } from "./glossary/glossary-detail/glossary-detail";
import { NoteComponent } from "./note/note";
import { ResourceItemComponent } from "./resources/resource-item/resource-item";
import { ResourcesListComponent } from "./resources/resources-list/resources-list";
import { HelpIconComponent } from "./help-icon/help-icon";
import { NgxYoutubePlayerModule } from "ngx-youtube-player";
import { ProjectTitleComponent } from "./project-title";
import { VideoPopupButtonComponent } from "./video-player/video-popup-button";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { IntroductionTextPage } from "./introduction/introduction-text/introduction-text";
import { VideoViewerPage } from "./video-player/video-viewer";

// import { DecisionToolMenuComponent } from './decision-tool-menu/decision-tool-menu';
@NgModule({
  declarations: [
    IntroductionComponent,
    IntroductionTextPage,
    GlossaryLinkComponent,
    GlossaryListComponent,
    GlossaryDetailComponent,
    NoteComponent,
    ResourcesListComponent,
    ResourceItemComponent,
    HelpIconComponent,
    ProjectTitleComponent,
    VideoPopupButtonComponent,
    VideoViewerPage
  ],
  imports: [
    IonicModule,
    NgxYoutubePlayerModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  exports: [
    IntroductionComponent,
    IntroductionTextPage,
    GlossaryLinkComponent,
    GlossaryListComponent,
    GlossaryDetailComponent,
    NoteComponent,
    ResourcesListComponent,
    ResourceItemComponent,
    HelpIconComponent,
    ProjectTitleComponent,
    VideoPopupButtonComponent,
    VideoViewerPage
  ],
  entryComponents: [IntroductionTextPage, VideoViewerPage]
})
export class GeneralComponentsModule {}
