'use strict';
const render = (root)=>{
	root.empty();

	const wrapper = $("<div class='wrapper'></div>");

	wrapper.append(Header());
	wrapper.append(Categoria());

	root.append(wrapper);
};


$(_=>{
	const root = $(".root");

	render(root);
});
