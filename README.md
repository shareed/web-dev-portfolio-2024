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
- `NavigationBar`: contains breakpoint for mobile and desktop navigation
    - `NavLogo`: contains the logo 
    - `MobileNavigation`: Navigation for xs, and sm breakpoints 0 to 899 screen
    - `DesktopNavigation`:
- `Home`: contains breakpoints/media queries for xs, sm, md, lg, xl
    - `HomeXS`: componet for xs breakpoint, screens 0 to 599
    - `HomeSM`: componet for sm breakpoint, screens 600 to 899
    - `HomeMD`: componet for md breakpoint, screens 900 to 1199
    - `HomeLG`: componet for lg breakpoint, screens 1200 to 1535
    - `HomeXL`: componet for xl breakpoint, screens 1536 and above

- `Contact`: contains breakpoints/media queries for xs, sm, md, lg, xl
    - `ContactXS`: componet for xs breakpoint, screens 0 to 599
    - `ContactSM`: componet for sm breakpoint, screens 600 to 899
    - `ContactMD`: componet for md breakpoint, screens 900 to 1199
    - `ContactLG`: componet for lg breakpoint, screens 1200 to 1535
    - `ContactXL`: componet for xl breakpoint, screens 1536 and above

- `Designs`: contains breakpoints/media queries for xs, sm, md, lg, xl
    - `DesignsXS`: componet for xs breakpoint, screens 0 to 599
    - `DesignsSM`: componet for sm breakpoint, screens 600 to 899
    - `DesignsMD`: componet for md breakpoint, screens 900 to 1199
    - `DesignsLG`: componet for lg breakpoint, screens 1200 to 1535
    - `DesignsXL`: componet for xl breakpoint, screens 1536 and above

- `FullStackProjects`: contains breakpoints/media queries for xs, sm, md, lg, xl
    - `FSPXS`: componet for xs breakpoint, screens 0 to 599
    - `FSPSM`: componet for sm breakpoint, screens 600 to 899
    - `FSPMD`: componet for md breakpoint, screens 900 to 1199
    - `FSPLG`: componet for lg breakpoint, screens 1200 to 1535
    - `FSPXL`: componet for xl breakpoint, screens 1536 and above



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