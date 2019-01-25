import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import feather from 'feather-icons';

import { Icons } from './Icons';

@Component({
	selector: 'app-icon',
	templateUrl: './icon.component.html',
	styleUrls: ['./icon.component.less']
})

/**
 * App icon component.
 * Uses: https://github.com/feathericons/feather.
 *
 * @author Barnabas Lesti
 */
export class IconComponent implements OnInit {
	private iconSvg: SafeHtml;

	@Input() icon: String;

	constructor (private domSanitizer: DomSanitizer) {}

	ngOnInit() {
		const svgOptions = {
			width: 16,
			height: 16,
			class: 'app-icon',
		};
		const featherIcon = feather.icons[this.icon];
		this.iconSvg = this.domSanitizer.bypassSecurityTrustHtml(featherIcon ? featherIcon.toSvg(svgOptions) : '');
	}
}
