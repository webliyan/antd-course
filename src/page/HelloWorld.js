import React from 'react';
import ShoppingList from './shoppinglist';
import Square from './square';
import Clock from './clock'
import AntCard from './antDesign'
import InputDemo from './Demo'

const element = <h1>Hello World</h1>;

const Picture = (props) =>{
	return(
		<div>
			<img src={props.src} />
			{props.children}
		</div>
	)
};
const style = {
    width:'50%',float:'left'
};
class Content extends React.Component {

	render() {
        const picture = {
            src: 'https://cdn.nlark.com/yuque/0/2018/jpeg/84141/1536207007004-59352a41-4ad8-409b-a416-a4f324eb6d0b.jpeg',
		};
		return(
			<div className="container">
				<div style={style}>
                    <ShoppingList/>
					<InputDemo />
				</div>
                <div style={style}>
                    <Picture src={picture.src}>
                        {picture.children}
                    </Picture>
                </div>

				<Square></Square>
				<Clock></Clock>
				<AntCard></AntCard>
			</div>
		)
	}
}

export default Content;