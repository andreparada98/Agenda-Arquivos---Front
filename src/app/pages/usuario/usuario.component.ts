import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LazyLoadEvent, MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { Subject, takeUntil } from 'rxjs';
import { ExcluirDialogComponent } from '../../@theme/modals/excluir-dialog/excluir-dialog.component';
import { ResponseModel } from '../../models/response.model';
import { UserModel } from '../../models/user.model';
import { UsuarioService } from './shared/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent {

unsubscribe: Subject<void> = new Subject<void>(); 
usuarios: UserModel[]
totalRecords: Number

  constructor(
    private usuarioService: UsuarioService,
    public dialogService: DialogService,
    private messageService: MessageService,
    public router: Router
    ) { }

   loadFromServer(event: LazyLoadEvent){
    this.usuarioService.getAllUsers().subscribe(res => {
      this.usuarios = res
      this.totalRecords = res.length
      console.log(res)
    })
  }

  excluir(id: number, title?: string): void {

    const dialogRef = this.dialogService.open(ExcluirDialogComponent, { data: { title : title },
      header: 'Excluir Registro',
      dismissableMask: true,
      closeOnEscape: true
    });

    dialogRef.onClose.subscribe(result => {

      if (result) {
        /* Chama serviço para exclusao de usuario */
        this.usuarioService.delete(id).pipe(takeUntil(this.unsubscribe)).subscribe(response => {

          // Response de retorno
          const res: ResponseModel = response as unknown as ResponseModel;

          /* Mostra msg de sucesso e e depois remove registro da tabela */
          if (res && res.id === 1) {
            this.messageService.add({severity:'success', summary:'Excluido com Sucesso', detail:'Via MessageService'});
           // this.atualizaLista();
          } else if (res) {
            /* MSG caso ocorra alguma exception no servidor (Codigo = 0) */
            this.messageService.add({severity:'error', summary:'Erro', detail:'Via MessageService'})
          }
        },
          (erro) => {
            this.messageService.add({severity:'error', summary:erro, detail:'Via MessageService'})
          });
      }
    });
  }

  incluirNovo(){
    this.router.navigate(['pages/usuario/new'])
  }

  visualizar(id: number): void{
    this.router.navigate(['pages/usuario/view', id])

  }
}
