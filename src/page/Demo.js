//受控组件与非受控组件

//对于这种不能直接控制状态的组件，我们称之为“非受控组件”。

//“受控”与“非受控”两个概念，区别在于这个组件的状态是否可以被外部修改。
// 一个设计得当的组件应该同时支持“受控”与“非受控”两种形式，即当开发者不控制组件属性时，组件自己管理状态，而当开发者控制组件属性时，组件该由属性控制。
// 而开发一个复杂组件更需要注意这点，以避免只有部分属性受控，使其变成一个半受控组件。


import React from 'react';
import {Tabs, Tree } from 'antd';
const MyInput = ({value = '', onChange }) => (
    <input value={value} onChange={onChange} />
);
const TabPane = Tabs.TabPane;
const TreeNode = Tree.TreeNode;
class Demo extends React.Component {
    state={
        text:'',
        activeKey:'1',
        expandedKeys:[]

    };
    onTextChange = (event) =>{
        this.setState({text:event.target.value});
        console.log(event.target.value)
    };
    onTextReset = () => {
        this.setState({text:''})
    };
    onTabsChange = (activeKey) =>{
        this.setState({activeKey})
    };
    onExpand = (expandedKeys) => {
        console.log(expandedKeys)
        this.setState({expandedKeys})
    };
    onSelect = (selectedKeys) => {
        console.log(selectedKeys)
        const { expandedKeys } = this.state;
        const key = selectedKeys[0];

        if (expandedKeys.includes(key)) {
            // 移除 key
            this.setState({
                expandedKeys: expandedKeys.filter(k => k !== key),
            });
        } else {
            // 添加 key
            this.setState({ expandedKeys: [...expandedKeys, key] });
        }
    };
    render() {
        return(
            <div>
                <MyInput value={this.state.text} onChange={this.onTextChange} />
                <button onClick={ this.onTextReset }>Reset</button>
                <Tabs activeKey={this.state.activeKey} onChange={this.onTabsChange}>
                    <TabPane tab="Tab 1" key="1">
                        <Tree
                            expandedKeys={this.state.expandedKeys}
                            selectedKeys={[]}
                            onExpand={this.onExpand}
                            onSelect={this.onSelect}
                        >
                            <TreeNode title="parent 1" key="0-0">
                                <TreeNode title="leaf" key="0-0-0" />
                                <TreeNode title="leaf" key="0-0-1" />
                            </TreeNode>
                        </Tree>
                    </TabPane>
                    <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
                </Tabs>

            </div>
        )
    }
}

export default Demo;
