import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private isDark: BehaviorSubject<boolean>;

  constructor(){
    this.isDark = new BehaviorSubject<boolean>(true);
  }

  onThemeChange(): Observable<boolean> {
    return this.isDark.asObservable();
  }
  
  setTheme(nextSuggestion: boolean): void {
    this.toggleTheme( nextSuggestion );
  }

  private toggleTheme(isDarkMode: boolean) {
    this.isDark.next(isDarkMode);

    if (isDarkMode) {
      document.documentElement.setAttribute("data-color-scheme", "dark");
      document.body.classList.add('dark-theme');
      document.body.classList.remove('light-theme');
    } else {
      document.documentElement.setAttribute("data-color-scheme", "light");
      document.body.classList.remove('dark-theme');
      document.body.classList.add('light-theme');
    }

    document.documentElement.style.overflow = "";
  }
}
