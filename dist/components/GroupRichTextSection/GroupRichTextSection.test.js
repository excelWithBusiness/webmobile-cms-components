import { cleanup } from '@testing-library/react';
import * as React from 'react';
import { GroupRichTextSection } from "./index";
import { mountWithTheme, Typo } from 'webmobile-sc-components';
var mockAnchorId = 'groupTextAnchorId';
describe('Content:Common:Components:GroupRichTextSection', function () {
  afterEach(cleanup);
  it('renders section with group richtext', function () {
    var groupText = [{
      textField: [{
        text: 'TextField1',
        type: 'paragraph',
        spans: []
      }, {
        text: 'TextField2',
        type: 'paragraph',
        spans: []
      }],
      title: [{
        text: 'Title1',
        type: 'heading1',
        spans: []
      }, {
        text: 'title2',
        type: 'heading2',
        spans: []
      }]
    }];
    var sectionColor = 'grey1';
    var renderCardSection = mountWithTheme(React.createElement(GroupRichTextSection, {
      fields: groupText,
      sectionColor: sectionColor,
      anchorId: mockAnchorId
    }));
    var heading = renderCardSection.find('h1').last();
    expect(heading.text()).toBe(groupText[0].title[0].text);
    var paragraph = renderCardSection.find(Typo).last();
    expect(paragraph.text()).toBe(groupText[0].textField[1].text);
  });
});
//# sourceMappingURL=GroupRichTextSection.test.js.map