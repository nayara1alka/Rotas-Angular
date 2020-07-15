import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanLoad } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../login/auth.service';
import { Route } from '@angular/compiler/src/core';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

  constructor(private authService: AuthService, 
    private router: Router ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) : Observable<boolean> | boolean{
    
    console.log('AuthGuard');
    
    return this.verificarAcesso();
    
  }

  private verificarAcesso(){

    if(this.authService.usuarioEstaAutenticado()){
      return true;
 }

 this.router.navigate(['/login']);

 return false;
}

 canLoad(route: Route ): Observable<boolean> | Promise<boolean> | boolean{

  console.log('canLoad: Verificando se o usuario pode carregar o cod do módulo');
    
  return this.verificarAcesso();

 }

  }


