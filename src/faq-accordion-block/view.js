/**
 * Use this file for JavaScript code that you want to run in the front-end 
 * on posts/pages that contain this block.
 *
 * When this file is defined as the value of the `viewScript` property
 * in `block.json` it will be enqueued on the front end of the site.
 *
 * Example:
 *
 * ```js
 * {
 *   "viewScript": "file:./view.js"
 * }
 * ```
 *
 * If you're not making any changes to this file because your project doesn't need any 
 * JavaScript running in the front-end, then you should delete this file and remove 
 * the `viewScript` property from `block.json`. 
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#view-script
 */
 
document.addEventListener('DOMContentLoaded', () => {
	document.querySelectorAll('.faq-question').forEach((question) => {
		question.setAttribute('role', 'button');
		question.setAttribute('tabindex', '0');
		question.setAttribute('aria-expanded', 'false');

		const toggle = () => {
			const answer = question.nextElementSibling;
			if (!answer) return;
			const isOpen = answer.style.display === 'block';
			answer.style.display = isOpen ? 'none' : 'block';
			question.setAttribute('aria-expanded', String(!isOpen));
		};

		question.addEventListener('click', toggle);
		question.addEventListener('keydown', (e) => {
			if (e.key === 'Enter' || e.key === ' ') {
				e.preventDefault();
				toggle();
			}
		});
	});
});
