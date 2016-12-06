import React, { Component } from 'react';
import {
	ART,
	LayoutAnimation
} from 'react-native';

const {
	Shape
} = ART

import Morph from 'art/morph/path';
import * as shape from 'd3-shape';

const d3 = {
	shape
};

type Props = {
	color: any,
	d: () => any
};

const AnimationDuration = 250;

export default class AnimatedShape extends Component {
	constructor(props: Props){
		super(props);
		this.state = {
			path: ''
		}
	}

	componentWillMount() {
    	this.computeNextState(this.props);
  	}

  	componentWillReceiveProps(nextProps) {
    	this.computeNextState(nextProps);
  	}

  	computeNextState(nextProps) {
  		const {
  			d
  		} = nextProps;

  		const graph = this.props.d();

  		this.setState({
  			path: graph.path
  		});

  		//graph initialization for first time
  		if(!this.previousGraph) {
  			this.previousGraph = graph;
  		}

  		//animation on property change
  		if(this.props !== nextProps) {
  			const pathFrom = this.previousGraph.path;
  			const pathTo = graph.path;

  			cancelAnimationFrame(this.animating);
      		this.animating = null;

      		LayoutAnimation.configureNext(
        		LayoutAnimation.create(
          			AnimationDuration,
          			LayoutAnimation.Types.easeInEaseOut,
          			LayoutAnimation.Properties.opacity
        		)
      		);

      		this.setState({
      			path: Morph.Tween(
      				pathFrom,
      				pathTo
      			),
      		}, () => this.animate());

      		this.previousGraph = graph
  		}
  	}

  	animate(start) {
  		this.animating = requestAnimationFrame((timestamp) => {
      		if (!start) {
        		start = timestamp;
      		}

      		// Get the delta on how far long in our animation we are.
      		const delta = (timestamp - start) / AnimationDuration;

      		if(delta > 1) {
      			this.animating = null;
      			// Just to be safe set our final value to the new graph path.
      			this.setState({
      				path: this.previousGraph.path
      			});

      			return;
      		}

      		this.state.path.tween(delta);

      		this.setState(this.state, () =>  {
      			this.animate(start);
      		});
  		});
  	}

  	render(){
  		const path = this.state.path;
  		return (
  				<Shape
  					d={path}
  					stroke={this.props.color}
  					fill={this.props.color}
  				/>
  			);
  	}
}