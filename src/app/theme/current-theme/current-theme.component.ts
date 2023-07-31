import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { ConfirmationDialogComponent } from 'src/app/shared/confirmation-dialog/confirmation-dialog.component';
import { Theme } from 'src/app/shared/interfaces/theme';
import { UserService } from 'src/app/user/user.service';

@Component({
	selector: 'app-current-theme',
	templateUrl: './current-theme.component.html',
	styleUrls: ['./current-theme.component.scss']
})
export class CurrentThemeComponent implements OnInit {
	theme: Theme | undefined;

	constructor(
		private apiService: ApiService,
		private userService: UserService,
		private router: Router,
		private activatedRoute: ActivatedRoute,
		private dialog: MatDialog
	) { }

	get isLogged(): boolean {
		return this.userService.isLogged;
	}



	ngOnInit(): void {
		this.fetchTheme();
	}
	id = this.activatedRoute.snapshot.params['themeId'];
	fetchTheme(): void {


		this.apiService.getTheme(this.id).subscribe((theme) => {

			this.theme = theme;

		});
	}
	get isOwner(): boolean {
		return this.userService.user?._id === this.theme?.userId;
	}

	deleteCurrentTheme() {

		const dialogRef = this.dialog.open(ConfirmationDialogComponent)

		dialogRef.afterClosed().subscribe(result => {
			if (result === true) {
				this.apiService.delTheme(this.id).subscribe(
					(theme) => {
						console.log('Рецептата е изтрита');
						this.router.navigate(['/themes'])
					},
					(error) => {
						console.error('Error occurred during theme deletion:', error)
					}

				);
			}
		});

    }

}
