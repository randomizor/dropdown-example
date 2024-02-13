import{S as E}from"../../_/r5PAalTO.js";import t from"ts-dedent";var R=(E=>(E.PREVIEW_CLIENT_LOGGER="PREVIEW_CLIENT-LOGGER",E.PREVIEW_CHANNELS="PREVIEW_CHANNELS",E.PREVIEW_CORE_EVENTS="PREVIEW_CORE-EVENTS",E.PREVIEW_INSTRUMENTER="PREVIEW_INSTRUMENTER",E.PREVIEW_API="PREVIEW_API",E.PREVIEW_REACT_DOM_SHIM="PREVIEW_REACT-DOM-SHIM",E.PREVIEW_ROUTER="PREVIEW_ROUTER",E.PREVIEW_THEMING="PREVIEW_THEMING",E.RENDERER_HTML="RENDERER_HTML",E.RENDERER_PREACT="RENDERER_PREACT",E.RENDERER_REACT="RENDERER_REACT",E.RENDERER_SERVER="RENDERER_SERVER",E.RENDERER_SVELTE="RENDERER_SVELTE",E.RENDERER_VUE="RENDERER_VUE",E.RENDERER_VUE3="RENDERER_VUE3",E.RENDERER_WEB_COMPONENTS="RENDERER_WEB-COMPONENTS",E))(R||{}),e=class extends E{constructor(E){super();this.data=E;this.category="PREVIEW_API";this.code=1}template(){return t`
    Couldn't find story matching id '${this.data.storyId}' after HMR.
    - Did you just rename a story?
    - Did you remove it from your CSF file?
    - Are you sure a story with the id '${this.data.storyId}' exists?
    - Please check the values in the stories field of your main.js config and see if they would match your CSF File.
    - Also check the browser console and terminal for potential error messages.`}},o=class extends E{constructor(E){super();this.data=E;this.category="PREVIEW_API";this.code=2;this.documentation="https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#using-implicit-actions-during-rendering-is-deprecated-for-example-in-the-play-function"}template(){return t`
      We detected that you use an implicit action arg during ${this.data.phase} of your story.  
      ${this.data.deprecated?"\nThis is deprecated and won't work in Storybook 8 anymore.\n":""}
      Please provide an explicit spy to your args like this:
        import { fn } from '@storybook/test';
        ... 
        args: {
         ${this.data.name}: fn()
        }
    `}};export{R as Category,o as ImplicitActionsDuringRendering,e as MissingStoryAfterHmrError};

