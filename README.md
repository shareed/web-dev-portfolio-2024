# Portfolio 2024

## Dependencies
- React Router
- Material UI
- Emotion React
- Emotion Styled



## Routes
|       URL               |     Component           |
| ----------------------- | ----------------------- |
| `/`                     | **Home**                |
| `/designs`              | **Designs**             |
| `/full-stack-projects`  | **FullStackProjects**   |



## Components  ➡ 
- `Home`
    - `HomeMobile`: contains compoenents for xs and sm breakpoints for 0 to 899 screens
        - `HomeXS`: XS Breakpoint content
        - `HomeSM`: SM Breakpoint content
    - `HomeDesktop`: contains compoenents for md breakpoint for 900 to 1199 screens
        - `HomeMD`: MD Breakpoint content
        - `HomeDesktopLarge`: contains compoenents for md breakpoint 1200 and above screens
            - `HomeLG`: LG Breakpoint content
            - `HomeXL`: XL Breakpoint content



## Color Schema
 <div class=' color one'>
    <p class='text' >RGB: rgb(255, 255, 255) </p>
    <p class='text' >Hex: #FFFFFF </p>
 </div> 

 <div class=' color two'>
    <p class='text' >RGB: rgb(0, 0, 0) </p>
    <p class='text' >Hex: #000000 </p>
 </div>             

<div class=' color three'>
    <p class='text' >RGB: rgb(77, 2, 77) </p>
    <p class='text' >Hex: #4D024D </p>
 </div> 
 
<div class=' color four'>
    <p class='text' >RGB: rgb(179, 10, 179) </p>
    <p class='text' >Hex: #B30AB3 </p>
 </div>

<style>
    .color {
        font-weight: bolder;
        padding: 1rem;
            width: 200px;
            height: 50px;         
    }

    .text {
        color: grey
    }

    .one {
        background-color: white;
    }
        
    .two {
        background-color: black;
    }

    .three {
        background-color: rgb(77, 2, 77);
    }

    .four {
        background-color: rgb(179, 10, 179);
    }
</style>