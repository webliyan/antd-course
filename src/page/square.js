import React from 'react';

//组件的状态
//除了接受外部参数，组件内部也有不同的状态。React 规定，组件的内部状态记录在this.state这个对象上面。
class Square extends  React.Component {
    constructor(props){
        super(props);
        this.state = {
            value:0
        };
    }
    render() {
        return (
            <div>
                <button
                    className='square'
                    onClick={()=> this.setState({value:this.state.value+1})}
                >
                    点击次数：{this.state.value}
                </button>
                <button  onClick={()=>this.setState({value:0})}>归零者</button>
            </div>


        );
    }
}

export  default Square