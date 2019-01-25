import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-directory-tree',
	templateUrl: './directory-tree.component.html',
	styleUrls: ['./directory-tree.component.less']
})

/**
 * Directory Tree component.
 *
 * @author Barnabas Lesti
 */
export class DirectoryTreeComponent implements OnInit {
	// private iconSvg: SafeHtml;

	// @Input() icon: String;

	constructor () {}

	ngOnInit() {
		console.log('DirectoryTreeComponent::ngOnInit()');
	}
}
