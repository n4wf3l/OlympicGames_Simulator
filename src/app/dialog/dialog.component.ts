import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent {
  positionList = ['Aanvaller', 'Middenvelder', 'Verdediger', 'Keeper'];
  playerForm!: FormGroup;
  constructor(private formBuilder: FormBuilder, private api: ApiService) {}

  ngOnInit(): void {
    this.playerForm = this.formBuilder.group({
      playerName: ['', Validators.required],
      category: ['', Validators.required],
      position: ['', Validators.required],
      price: ['', Validators.required],
      comment: ['', Validators.required],
      date: ['', Validators.required],
    });
  }

  addPlayer() {
    if (this.playerForm.valid) {
      this.api.postPlayer(this.playerForm.value).subscribe({
        next: (res: any) => {
          alert('Player added successfully');
        },
        error: () => {
          alert('Error while adding the player');
        },
      });
    }
  }
}
