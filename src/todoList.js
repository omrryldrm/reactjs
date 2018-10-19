import React from 'react';
export class TodoList extends React.Component {
   constructor(){
       super();
       this.state={todoFilter:'All'};
   }
   
    doneTask= (e) =>{
        this.props.doneTask(e.target.parentNode.id);// js ile id sini aldık.

   };

   removeTask= (e) =>{
        this.props.removeTask(e.target.parentNode.id);

   };

   todoListFilter= (param) =>{
    console.log(param);
    this.setState({todoFilter: param});
    const activeButton=document.getElementById('filterButton'+param);
    document.getElementById('filterButtonAll').classList.remove('active');
    document.getElementById('filterButtonAktif').classList.remove('active');
    document.getElementById('filterButtonTamamlanmış').classList.remove('active');
    activeButton.classList.add('active');
   };

    render() {
        let items_left = 0;
        const items = this.props.myList.map((elem,i)=> {
            if(elem.status==='passive'){
                items_left++;
                 }   
            
            if(this.state.todoFilter==='All' || 
            (this.state.todoFilter==='Aktif' && elem.status==='passive') ||
            (this.state.todoFilter==='Tamamlanmış' && elem.status==='active') )
            {
                 
                let task_id ='task_'+i;
                
                 return(
                    <li key={i} id={task_id} className={elem.status}>
                        <span className="id">{i+1}</span>
                        <span className="title">{elem.text}</span>
                        <span className="type"  onClick={this.doneTask}/>
                        <span className="delete" onClick={this.removeTask}/>
                   
                    </li>
                 )   

            }   

        });
    


        return(
            <div>
                <div className="todo-list"> 
                    <ul>
                    {items}
                    </ul>
                </div>
               <div className="todo-filter">
                    <div className="left">
                        <span>{items_left}items left</span>
                    </div>

                    <div className="rigth" id="listChanger">
                        <ul>
                            <li  className="active" id="filterButtonAll"><span onClick={() => this.todoListFilter('All')}>All</span></li>
                            <li id="filterButtonAktif"><span onClick={() => this.todoListFilter('Aktif')}>Aktif</span></li>
                            <li id="filterButtonTamamlanmış"><span onClick={() => this.todoListFilter('Tamamlanmış')}>Tamamlanmış</span></li>
                        </ul>
                    
                    </div>
               
               </div>
            </div>
        )

        
        }
    }

