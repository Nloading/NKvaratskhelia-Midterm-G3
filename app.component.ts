import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Nika Kvaratskhelia';
}

type MyArrayType = Array<{id: number, text: string}>;

const arr: MyArrayType = [
    {id: 1, text: 'Firstname'},
    {id: 2, text: 'Sentence 2'},
    {id: 3, text: 'Sentence 3'},
    {id: 4, text: 'Sentenc4 '},
    {id: 5, text: 'Sentenc4 '},
];
