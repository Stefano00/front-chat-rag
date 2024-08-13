import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-ask',
  standalone: true,
  templateUrl: './ask.component.html',
  styleUrls: ['./ask.component.css'],
  imports: [CommonModule, FormsModule]  // Asegúrate de importar los módulos necesarios
})
export class AskComponent {
  question: string = '';
  responseMessage: string = '';  // Nueva propiedad para almacenar la respuesta

  constructor(private http: HttpClient) {}

  onSubmit() {
    const body = { question: this.question };
    this.http.post<{ message: string }>('http://localhost:8080/ask', body)
      .subscribe({
        next: response => {
          this.responseMessage = response.message;  // Asignar la respuesta a la propiedad
          console.log('Response:', response);
        },
        error: (error: HttpErrorResponse) => {
          console.error('Error occurred:', error);
          if (error.status === 200 && typeof error.error === 'string') {
            // Probablemente es un error de análisis JSON
            this.responseMessage = error.error;
          } else {
            this.responseMessage = 'An error occurred. Please try again.';
          }
        }
      });
  }
}

