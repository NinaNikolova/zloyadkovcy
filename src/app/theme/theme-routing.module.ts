import { RouterModule, Routes } from "@angular/router";

import { CreateComponent } from "./create/create.component";
import { ThemeDetailComponent } from "./theme-detail/theme-detail.component";
import { ThemeListComponent } from "./theme-list/theme-list.component";
import { RecentPostsComponent } from "./recent-posts/recent-posts.component";
import { CatalogComponent } from "./catalog/catalog.component";
import { MainComponent } from "./main/main.component";
import { ThemeResolver } from "./theme.resolver";

const routes: Routes = [

    {
        path: 'list',
        component: MainComponent,
        data: {
            title: 'Всички категории/теми'
        }
    },
    {
        path: 'catalog',
        component: CatalogComponent,
        data: {
            title: 'Всички рецепти'
        }
    },
    {
        path: 'create',
        component: CreateComponent,
        data: {
            title: 'Създай тема/категория'
        }
    },
    {
        path: 'detail/:id',
        resolve: {
            theme: ThemeResolver
        },
        component: ThemeDetailComponent,
        data: {
            title: 'В тази категория...'
        }
    }

]


export const ThemeRoutingModule = RouterModule.forChild(routes)