import { Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { TableComponent } from "./components/table/table.component";
import { UserComponent } from "./components/user/user.component";

export const routes: Routes = [
    {
        path: "",
        pathMatch: "full",
        component: HomeComponent,
    },
    {
        path: "home",
        redirectTo: "",
    },
    {
        path: "standard-mat-table",
        component: TableComponent,
    },
    {
        path: "standard-mat-table-with-filter",
        component: TableComponent,
    },
    {
        path: "custom-table",
        component: TableComponent,
    },
    {
        path: "user",
        component: UserComponent,
    },
    {
        path: "**",
        redirectTo: "",
    },
];
