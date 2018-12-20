//组件生命周期

import React from 'react';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        };
    }
    //常用的三个生命周期方法
    //组件挂载后调用
    componentDidMount() {

    }
    //组件卸载前调用
    componentWillMount() {

    }
    //会在 UI 每次更新后调用（即组件挂载成功以后，每次调用 render 方法，都会触发这个方法）
    componentDidUpdate() {

    }

    //不常用的 了解
    //每当this.props或this.state有变化，在render方法执行之前，就会调用这个方法。
    // 该方法返回一个布尔值，表示是否应该继续执行render方法，即如果返回false，UI 就不会更新，
    // 默认返回true。组件挂载时，render方法的第一次执行，不会调用这个方法。
    // shouldComponentUpdate(nextProps, nextState){
    //
    // }
    //
    // //该方法在render方法执行之前调用，包括组件的第一次记载。它应该返回一个新的 state 对象，通常用在组件状态依赖外部输入的参数的情况。
    // static getDerivedStateFromProps(props, state){
    //
    // }
    // //该方法在每次 DOM 更新之前调用，用来收集 DOM 信息。它返回的值，将作为参数传入componentDidUpdate()方法。
    // getSnapshotBeforeUpdate() {
    //
    // }
    render() {
        return(
            <div>
                <h1>Hello World!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        )
    }
}

export  default Clock;