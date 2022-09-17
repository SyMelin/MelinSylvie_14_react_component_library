# React Compoment librairy - Modal

A modal as React component, CSS free.

Conversion to React of the original jQuery modal plugin from: https://github.com/kylefox/jquery-modal

## 1. General information

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)

**Redux Requirements:** Redux is managing the application's state and uses { createSlice } from '@reduxjs/toolkit'. So be sure the component is compatible with the state management implementation of your project.

The component works like a modal and can be customised through the modal's content and CSS.
The component is CSS free. So you can customise it at your convinience.

The codebase is available at: https://github.com/SyMelin/MelinSylvie_14_react_component_library.git

The package is available at: https://github.com/SyMelin/MelinSylvie_14_react_component_library/pkgs/npm/react-component-library

For an example of this modal's implementation in a project, you can visit: https://github.com/SyMelin/MelinSylvie_14_08082022.git

## 2.Installation

You can install the modal component `<Modal />` (https://github.com/SyMelin/MelinSylvie_14_react_component_library/pkgs/npm/react-component-library) with npm:
```
`npm install @symelin/react-component-library@0.10.0 --registry=https://npm.pkg.github.com`
```

## 3.Implementation of the modal component

### 3.1.Access the modal component state

The reducer is build using { createSlice } from '@reduxjs/toolkit' (For more details about the modal reducer see: https://github.com/SyMelin/MelinSylvie_14_react_component_library/blob/main/src/lib/Modal/modal.js)
Be sure the component is compatible with the state management implementation of your project.

#### 3.1.1.Include the modal reducer to the store of your project

```
import { configureStore }  from '@reduxjs/toolkit'
import { default as modalReducer } from '@symelin/react-component-library/Modal/modal'
import otherReducerOfYourProject from 'pathOfTheOtherReducer'

const storeOfYourProject = configureStore ({
    reducer: {
        modal: modalReducer,
        otherReducerOfYourProject: otherReducerOfYourProjectReducer,
    }
})

export default storeOfYourProject
```

#### 3.1.2.modalIsActive

In the modal reducer's file, initial state is set as :
```
const initialState = {
    modalIsActive: false,               // modal is not active
    modalCanBeOpen: false,              // modal's content is not allowed to display
    blocker: {
        status: 'blockerIsClosed'       // blocker (overlay) is not displayed
    },
    modal: {
        status: 'modalIsClosed',        // modal's content is not displayed
    }
}
```
For more details, see https://github.com/SyMelin/MelinSylvie_14_react_component_library/blob/main/src/lib/Modal/modal.js)

**The only property you need to use is :**
```
modalIsActive
```
### 3.2.Import the <Modal /> component

Inside the page where the modal component should appear:
```
import Modal from '@symelin/react-component-library/Modal'
import { useSelector } from 'react-redux'
import { yourSelectModal } from 'pathToYourSelectModal'

function yourPage() {
    const modalIsActive = useSelector(yourSelectModal).modalIsActive
    render (
        <div>
            { modalIsActive ? <Modal {...props}/> } : null }
        </div>
    )
}
```


If you need to set "position: fixed" in the CSS, you may wrap the modal component in a wrapper component such as:
```
{ modalIsActive
? <ModalWrapper className="modalWrapper>
    <Modal {...props}/>
</ModalWrapper>
: null}

```
and in your CSS : 
```
.modalWrapper {
    position: fixed;
}
```

### 3.3.Set the props

You can customise the modal content as you wish by creating the element and passing it through the children props.

```
const modalContentChildren = <balise>TheChildrenOfTheModalContent</balise>
    
<Modal
    id="yourId"                                 // id added to the overlay (blocker).
    dataTestid="yourDataTestid",                // data-testid added to the overlay (blocker). Default: "blocker"
    children={modalContentChildren}             // Elements as modal content
    escapeClose={}                              // Allows the user to close the modal by pressing `ESC`. Default: true
    clickClose={}                               // Allows the user to close the modal by clicking the overlay. Default: true
    closeText="yourCloseText"                   // Text content for the close <button> tag. Default:"Close"
    blockerClass="yourBlockerClass"             // CSS class added to the overlay (blocker). Default: "blocker"
    modalClass="yourModalClass"                 // CSS class added to the element being displayed in the modal. Default: "modal"
    closeButtonClass="yourCloseButtonClass"     // Add additional class(es) to the close <button> tag.
    showCloseButton={}                          // Shows a (X) icon/button in the top-right corner of the displayed element. Default: true
   
    handleModalBeforeBlock={() => {console.log('handleModalBeforeBlock')}}      // Fires just before the overlay (blocker) appears. Default: null
    handleModalBlock={() => {console.log('handleModalBlock')}}                  // Fires after the overlay (block) is visible. Default: null
    hanleModalBeforeOpen={() => {console.log('handleModalBeforeOpen')}}         // Fires just before the modal opens. Default: null
    handleModalOpen={() => {console.log('handleModalOpen')}}                    // Fires after the modal has finished opening. Default: null

    handleModalBeforeClose={() => {console.log('handleModalBeforeClose')}}      // Fires when the modal has been requested to close. Default: null
    handleModalClose={() => {console.log('handleModalClose')}}                  // Fires when the modal begins closing (including animations). Default: null
    handleModalAfterClose={() => {console.log('handleModalAfterClose')}}        // Fires after the modal has fully closed (including animations). Default: null
    
    fadeDuration={}     // Number of milliseconds the fade transition takes (null means no transition); Default: null
    fadeDelay={}        // Point during the overlay's fade-in that the modal begins to fade in (.5 = 50%, 1.5 = 150%, etc.). Default: 1.0
/>
```


### 3.4.Trigger the modal opening: Action you need to dispatch

**The only action you need to use is:**
````
    toggleModalState,      // modal is active or not
````

Inside your trigger function/element:
```
import { toggleModalState } from '@symelin/react-component-library/Modal/modal.js'
import { useDispatch} from 'react-redux'

const dispatch = useDispatch()

dispatch(toggleModalState())
```

For more details, see https://github.com/SyMelin/MelinSylvie_14_react_component_library/blob/main/src/lib/Modal/modal.js)

### 4.Example of implementation

For an example of this modal's implementation in a project, you can visit: https://github.com/SyMelin/MelinSylvie_14_08082022.git


### 5.Fade Transitions

By default the overlay & window appear instantaneously, but you can enable a fade effect by specifying the `fadeDuration` property.

```
    fadeDuration={250}
    fadeDelay={}
```

This will fade in the overlay and modal over 250 milliseconds _simultaneously._ If you want the effect of the overlay appearing _before_ the window, you can specify the `fadeDelay` property. This indicates at what point during the overlay transition the window transition should begin.

So if you wanted the window to fade in when the overlay's was 80% finished:

```
    fadeDuration={250}
    fadeDelay={0.80}
```

Or, if you wanted the window to fade in a few moments after the overlay transition has completely finished:

```
    fadeDuration={250}
    fadeDelay={1.5}
```

The `fadeDelay` property only applies when opening the modal. When closing the modal, both the modal and the overlay fade out simultaneously according to the `fadeDuration` setting.

Fading is the only supported transition.