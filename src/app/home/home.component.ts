import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section>
      <form>
        <p>Name</p>
        <input type="text" placeholder="Filter by city" />
        <button class="primary" type="button">Search</button>
      </form>
    </section>
    <div class="card-container">
      <!-- <a
      class="card"
      target="_blank"
      rel="noopener"
      href="https://angular.io/tutorial"
    >
      <svg
        class="material-icons"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path
          d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"
        />
      </svg>
      <span>Learn Angular</span>
      <svg
        class="material-icons"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
      </svg>
    </a> -->
    <table class="table table-hover">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
   
  </tbody>
</table>
    </div>
  `,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {}
