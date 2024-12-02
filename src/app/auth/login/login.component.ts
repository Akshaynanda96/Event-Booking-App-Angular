import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  protected isLogin: boolean = true;

  @ViewChild('module') module : ElementRef | undefined ;

  closePop() {
    if (this.module) {
      const isHidden = this.module.nativeElement.style.display === 'none';
      this.module.nativeElement.style.display = isHidden ? 'block' : 'none';
    }
  }
}