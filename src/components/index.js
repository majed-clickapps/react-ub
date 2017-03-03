import React from 'react'
import reactCSS from 'reactcss'
import { ChromePicker  } from 'react-color'

var home = React.createClass({
	getInitialState: function() {
		return {
			navbarBackground: '#FFFFFF',
			activeNav: '#EEEEEE',
			activeColorNav: '#4B4B4B',
			fontColorNav: '#4B4B4B',
			display_background_nav: false,
			display_fontcolor_nav: false,
			display_activecolor_nav: false,
			fontcolor_nav: false,
			checkbox_active: false,
			// Dropdown stats
			backgroundDropdaown: '#FFF',
			fontDropdaown: '#4B4B4B',
			dropdaownDivider:'#000',
			display_background_dropdaown: false,
			display_font_dropdaown: false,
			display_dropdaown_divider: false,
		};
	},

	handleClick: function(type){
		switch(type){
			case 'background_nav':
				this.setState({ display_background_nav: !this.state.display_background_nav });
				break;
			case 'active_nav':
				this.setState({ display_active_nav: !this.state.display_active_nav});
			break;
			case 'fontcolor_nav':
				this.setState({ display_fontcolor_nav: !this.state.display_fontcolor_nav});
			break;
			case 'activecolor_nav':
				this.setState({ display_activecolor_nav: !this.state.display_activecolor_nav});
			break;
			// Dropdaown
			case 'background_dropdaown':
				this.setState({ display_background_dropdaown: !this.state.display_background_dropdaown});
			break;
			case 'font_dropdaown':
				this.setState({ display_font_dropdaown: !this.state.display_font_dropdaown});
			break;
			case 'dropdaown_divider':
				this.setState({ display_dropdaown_divider: !this.state.display_dropdaown_divider});
			break;
		}
	},

	handleClose:function(type){
		switch(type){
			case 'background_nav':
				this.setState({ display_background_nav: false });
				break;
			case 'active_nav':
				this.setState({ display_active_nav: false });
				break;
			case 'fontcolor_nav':
				this.setState({ display_fontcolor_nav: false });
			break;
			case 'activecolor_nav':
				this.setState({ display_activecolor_nav: false });
			break;
			// Dropdaown
			case 'background_dropdaown':
				this.setState({ display_background_dropdaown: false });
			break;
			case 'font_dropdaown':
				this.setState({ display_font_dropdaown: false });
			break;
			case 'dropdaown_divider':
				this.setState({ display_dropdaown_divider: false });
			break;
		}
	},

	handleChange:function(type, color) {
		switch (type){
			case 'background_nav':
				this.setState({ navbarBackground: color.hex });
			break;
			case 'active_nav':
				this.setState({ activeNav: color.hex });
			break;
			case 'fontcolor_nav':
				this.setState({ fontColorNav: color.hex });
			break;
			case 'activecolor_nav':
				this.setState({ activeColorNav: color.hex });
			break;
			// Dropdaown
			case 'background_dropdaown':
				this.setState({ backgroundDropdaown: color.hex });
			break;
			case 'font_dropdaown':
				this.setState({ fontDropdaown: color.hex });
			break;
			case 'dropdaown_divider':
				this.setState({ dropdaownDivider: color.hex });
			break;

		}
	},

	render: function() {
		const styles = reactCSS({
			'default': {
				swatch: {
					padding: '5px',
					background: '#fff',
					borderRadius: '1px',
					boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
					display: 'inline-block',
					cursor: 'pointer',
				},
				popover: {
					position: 'absolute',
					marginTop: '17px',
					zIndex: '2',
				},
				cover: {
					position: 'fixed',
					top: '0px',
					right: '0px',
					bottom: '0px',
					left: '0px',
				},
				navbar	: {
					background: `${ this.state.navbarBackground }`,
				},
				activeNav	:{
					background: `${ this.state.activeNav }`,
					color: `${ this.state.activeColorNav }`,
				},
				fontColorNav:{
					color: `${ this.state.fontColorNav }`,
				},
				tolfontColorNav:{
					backgroundColor: `${ this.state.fontColorNav }`,
				},
				tolactiveColorNav:{
					backgroundColor: `${ this.state.activeColorNav }`,
				},
				bacDropdaown	: {
					background: `${ this.state.backgroundDropdaown }`,
				},
				fontDropdaown	: {
					background: `${ this.state.fontDropdaown }`,
				},
				fontColorDropdaown	: {
					color: `${ this.state.fontDropdaown }`,
				},
				dropdaownDivider	: {
					background: `${ this.state.dropdaownDivider }`,
				},
			},
		});

	return (
		<div>
			<section className="nav-view">
				<div className="container">
					<div className="row">
						<div className="col-lg-8 col-md-offset-2">
							<nav className="navbar navbar-default" style={styles.navbar}>
								<div className="container-fluid">
									{/*-- Brand and toggle get grouped for better mobile display --*/}
									<div className="navbar-header">
										<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
											<span className="sr-only">Toggle navigation</span>
											<span className="icon-bar"></span>
											<span className="icon-bar"></span>
											<span className="icon-bar"></span>
										</button>
										<a className="navbar-brand" href="#" style={styles.fontColorNav}>Brand</a>
									</div>

									{/*-- Collect the nav links, forms, and other content for toggling --*/}
									<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
										<ul className="nav navbar-nav">
											<li className="active"><a href="#" style={styles.activeNav}>Link <span className="sr-only">(current)</span></a></li>
											<li><a href="#" style={styles.fontColorNav}>Link</a></li>
											<li className={this.state.checkbox_active	? 'dropdown open' : 'dropdown' }>
												<a onClick={() =>{this.setState({checkbox_active: !this.state.checkbox_active})}}  href="#" style={styles.fontColorNav} className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span className="caret"></span></a>
												<ul className="dropdown-menu" style={styles.bacDropdaown}>
													<li><a href="#" style={styles.fontColorDropdaown}>Action</a></li>
													<li><a href="#" style={styles.fontColorDropdaown}>Another action</a></li>
													<li><a href="#" style={styles.fontColorDropdaown}>Something else here</a></li>
													<li role="separator" className="divider" style={styles.dropdaownDivider}></li>
													<li><a href="#" style={styles.fontColorDropdaown}>Separated link</a></li>
													<li role="separator" className="divider" style={styles.dropdaownDivider}></li>
													<li><a href="#" style={styles.fontColorDropdaown}>One more separated link</a></li>
												</ul>
											</li>
										</ul>
										<form className="navbar-form navbar-left">
											<div className="form-group">
												<input type="text" className="form-control" placeholder="Search" />
											</div>
											<button type="submit" className="btn btn-default">Submit</button>
										</form>
										<ul className="nav navbar-nav navbar-right">
											<li><a href="#" style={styles.fontColorNav}>Link</a></li>
											<li><a href="#" style={styles.fontColorNav}>Link</a></li>
										</ul>
									</div>{/*-- /.navbar-collapse --*/}
								</div>{/*-- /.container-fluid --*/}
							</nav>
						</div>
					</div>

				</div>
			</section>
			<section className="nav-tools">
				<div className="container">
					<div className="row">
						<div className="col-md-3">
							<div className="label-color">
								<div className="color" style={ styles.navbar } onClick={ this.handleClick.bind(this, 'background_nav') } />
								{ this.state.display_background_nav ? <div style={ styles.popover }>
									<div style={ styles.cover } onClick={ this.handleClose.bind(this, 'background_nav') }/>
									<ChromePicker color={ this.state.navbarBackground } onChange={ this.handleChange.bind(this, 'background_nav') } />
								</div> : null }
								<h5>Background</h5>
							</div>
						</div>
						<div className="col-md-3">
							<div className="label-color">
								<div className="color" style={ styles.tolfontColorNav} onClick={ this.handleClick.bind(this, 'fontcolor_nav') } />
								{ this.state.display_fontcolor_nav ? <div style={ styles.popover }>
									<div style={ styles.cover } onClick={ this.handleClose.bind(this, 'fontcolor_nav') }/>
									<ChromePicker color={ this.state.fontColorNav } onChange={ this.handleChange.bind(this, 'fontcolor_nav') } />
								</div> : null }
								<h5>Font	Color</h5>
							</div>
						</div>
						<div className="col-lg-3">
							<div className="label-color">
								<div className="color" style={ styles.tolactiveColorNav} onClick={ this.handleClick.bind(this, 'activecolor_nav') } />
								{ this.state.display_activecolor_nav ? <div style={ styles.popover }>
									<div style={ styles.cover } onClick={ this.handleClose.bind(this, 'activecolor_nav') }/>
									<ChromePicker color={ this.state.activeColorNav } onChange={ this.handleChange.bind(this, 'activecolor_nav') } />
								</div> : null }
								<h5>Active	Color</h5>
							</div>
						</div>
						<div className="col-md-3">
							<div className="label-color">
								<div className="color" style={ styles.activeNav} onClick={ this.handleClick.bind(this, 'active_nav') } />
								{ this.state.display_active_nav ? <div style={ styles.popover }>
									<div style={ styles.cover } onClick={ this.handleClose.bind(this, 'active_nav') }/>
									<ChromePicker color={ this.state.activeNav } onChange={ this.handleChange.bind(this, 'active_nav') } />
								</div> : null }
								<h5>Active	Background</h5>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="snav-dropDown">
				<div className="container">
					<div className="row">
						<div className="col-xs-12">
							<h4>dropdown Style</h4>
							<div className="checkbox">
								<label>
									<input
										defaultChecked={this.state.checkbox_active}
										onChange={(event) => {this.setState({checkbox_active: !this.state.checkbox_active})}} type="checkbox" /> Open	dropdown
								</label>
							</div>
						</div>
					</div>
					<div className="row">

						<div className="col-md-3">
							<div className="label-color">
								<div className="color" style={ styles.bacDropdaown } onClick={ this.handleClick.bind(this, 'background_dropdaown') } />
								{ this.state.display_background_dropdaown ? <div style={ styles.popover }>
									<div style={ styles.cover } onClick={ this.handleClose.bind(this, 'background_dropdaown') }/>
									<ChromePicker color={ this.state.backgroundDropdaown } onChange={ this.handleChange.bind(this, 'background_dropdaown') } />
								</div> : null }
								<h5>Background</h5>
							</div>
						</div>

						<div className="col-md-3">
							<div className="label-color">
								<div className="color" style={ styles.fontDropdaown } onClick={ this.handleClick.bind(this, 'font_dropdaown') } />
								{ this.state.display_font_dropdaown ? <div style={ styles.popover }>
									<div style={ styles.cover } onClick={ this.handleClose.bind(this, 'font_dropdaown') }/>
									<ChromePicker color={ this.state.fontDropdaown } onChange={ this.handleChange.bind(this, 'font_dropdaown') } />
								</div> : null }
								<h5>Color	font	Dropdown</h5>
							</div>
						</div>

						<div className="col-md-3">
							<div className="label-color">
								<div className="color" style={ styles.dropdaownDivider } onClick={ this.handleClick.bind(this, 'dropdaown_divider') } />
								{ this.state.display_dropdaown_divider ? <div style={ styles.popover }>
									<div style={ styles.cover } onClick={ this.handleClose.bind(this, 'dropdaown_divider') }/>
									<ChromePicker color={ this.state.dropdaownDivider } onChange={ this.handleChange.bind(this, 'dropdaown_divider') } />
								</div> : null }
								<h5>Dropdaown	Divider	(Line)</h5>
							</div>
						</div>

					</div>
				</div>
			</section>

			<section className="nav-code">
				<div className="container">
					<div className="row">
<pre>{`

/* background color */
.navbar-default {
  background-color: ${this.state.navbarBackground};
}

/* font color */
.navbar-default .navbar-nav > li > a {
  color: ${ this.state.fontColorNav };
}

/* Active Style */
.navbar-default .navbar-nav > .active > a,
.navbar-default .navbar-nav > .active > a:hover,
.navbar-default .navbar-nav > .active > a:focus {
  color: ${ this.state.activeColorNav };
  background-color: ${ this.state.activeNav };
}

/* Dropdown style */
.dropdown-menu {
  background-color: ${ this.state.backgroundDropdaown };
}

/* Dropdown color */
.dropdown-menu > li > a{
  color: ${ this.state.fontDropdaown };
}

/* Dropdown divider (Line) */
.dropdown-menu .divider{
  background-color: ${ this.state.dropdaownDivider };
}

`}</pre>
					</div>
				</div>
			</section>
		</div>
	);

	}

});

module.exports = home;
