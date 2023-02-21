import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Dialog } from '@angular/cdk/dialog';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnInit {
  positionList = ['Aanvaller', 'Middenvelder', 'Verdediger', 'Keeper'];
  playerForm!: FormGroup;
  actionBtn: string = 'Save';
  constructor(
    private formBuilder: FormBuilder,
    private api: ApiService,
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private dialogRef: MatDialogRef<DialogComponent>
  ) {}

  ngOnInit(): void {
    this.playerForm = this.formBuilder.group({
      playerName: ['', Validators.required],
      category: ['', Validators.required],
      position: ['', Validators.required],
      price: ['', Validators.required],
      comment: ['', Validators.required],
      date: ['', Validators.required],
    });

    if (this.editData) {
      this.actionBtn = 'Update';
      this.playerForm.controls['playerName'].setValue(this.editData.playerName);
      this.playerForm.controls['category'].setValue(this.editData.category);
      this.playerForm.controls['position'].setValue(this.editData.position);
      this.playerForm.controls['price'].setValue(this.editData.price);
      this.playerForm.controls['comment'].setValue(this.editData.comment);
      this.playerForm.controls['date'].setValue(this.editData.date);
    }
  }

  addPlayer() {
    if (!this.editData) {
      if (this.playerForm.valid) {
        this.api.postPlayer(this.playerForm.value).subscribe({
          next: (res) => {
            alert('Player added successfully');
            this.playerForm.reset();
            this.dialogRef.close('save');
          },
          error: () => {
            alert('Error while adding the player');
          },
        });
      }
    } else {
      this.updatePlayer();
    }
  }
  updatePlayer() {
    this.api.putPlayer(this.playerForm.value, this.editData.id).subscribe({
      next: (res) => {
        alert('Player updated successfully');
        this.playerForm.reset();
        this.dialogRef.close('update');
      },
      error: () => {
        alert('Error while updating data.');
      },
    });
  }
}
