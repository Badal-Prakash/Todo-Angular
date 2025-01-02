import { Component ,signal,computed, input} from '@angular/core';
// import { DUMMY_USERS } from '../../dummy-users';
// const random_Number=Math.floor(Math.random()*DUMMY_USERS.length);
@Component({
  selector: 'app-user',
  standalone:true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // selectedUser=signal(DUMMY_USERS[random_Number]);
  // imagePath=computed(()=>{ return '/assets/users/' + this.selectedUser().avatar})
  // get imagePath()
  // {
  //     return '/assets/users/' + this.selectedUser().avatar
  // }


  @input() avatar; 


  onSelectUSer()
  {
    // const random_Number=Math.floor(Math.random()*DUMMY_USERS.length);
    // this.selectedUser.set(DUMMY_USERS[random_Number]);
  }
}
