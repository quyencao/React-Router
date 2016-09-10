import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';
import { Link } from 'react-router';

class PostsNew extends Component {

	static contextTypes = {
		router: PropTypes.object
	};

	onSubmit(props) {

		// Success to make a post request
		// navigate to / route

		this.props.createPost(props)
			.then(() => {
				// blog post has been created
				// we navigate by call this.context.router.push with
				// a new path to navigate to
				this.context.router.push('/');
			});

	}

	render() {
		const { fields: { title, categories, content }, handleSubmit } = this.props;
		// title = this.props.field.title

		return (
			<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
				<h3>Create A New Post</h3>
				<div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
					<label>Title</label>
					<input type="text" className="form-control" {...title} />
					<div className="text-help text-danger">{title.touched ? title.error : ''}</div>
				</div>
				<div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}`}>
					<label>Categories</label>
					<input type="text" className="form-control" {...categories} />
					<div className="text-help text-danger">{categories.touched ? categories.error : ''}</div>
				</div>
				<div className={`form-group ${content.touched && content.invalid ? 'has-danger' : ''}`}>
					<label>Content</label>
					<textarea className="form-control" {...content} />
					<div className="text-help text-danger">{content.touched ? content.error : ''}</div>
				</div>

				<button type="submit" className="btn btn-primary">Submit</button>
				<Link to="/" className="btn btn-danger">Cancel</Link>
			</form>
		);
	}
}

function validate(values) {
	const errors = {};

	if(!values.title) {
		errors.title = 'Enter a title';
	}

	if(!values.categories) {
		errors.categories = "Enter categories";
	}

	if(!values.content) {
		errors.content = "Enter some content";
	}

	return errors;
}

// connect: first is mapStateToProps, second is mapDispatchToProps
// reduxFrom: first is form config, second is mapStateToProps, third is mapDispatchToProps
export default reduxForm({
	form: 'PostsNewForm', 
	fields: ['title', 'categories', 'content'],
	validate
}, null, { createPost } )(PostsNew);