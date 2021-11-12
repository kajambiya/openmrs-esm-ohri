import React from 'react';
import styles from './_page.scss';
import OHRIFormSection from '../section/ohri-form-section.component';
import { Waypoint } from 'react-waypoint';
import { Accordion, AccordionItem, Toggle } from 'carbon-components-react';
import ReactMarkdown from 'react-markdown';

function OHRIFormPage({ page, onFieldChange, setSelectedPage, isCollapsed }) {
  let newLabel = page.label.replace(/\s/g, '');

  const handleEnter = elementID => {
    setSelectedPage(elementID);
  };

  return (
    <Waypoint onEnter={() => handleEnter(newLabel)} bottomOffset="95%">
      <div id={newLabel} className={styles.pageContent}>
        <div style={{}} className={styles.pageHeader}>
          <p className={styles.pageTitle}>{page.label}</p>
        </div>
        <Accordion>
          {!page.markdown?.isHidden && <ReactMarkdown children={page.markdown.content.join('\n')} />}
          {/* <p className={styles.required}>All fields are required unless marked optional</p> */}
          {page.sections.map((sec, index) => {
            return (
              <AccordionItem title={sec.label} open={isCollapsed} className={styles.sectionContent}>
                <div className={styles.formSection} key={index}>
                  {!sec.markdown?.isHidden && <ReactMarkdown children={sec.markdown.content.join('\n')} />}
                  <OHRIFormSection
                    fields={sec.questions}
                    showTitle={page.sections.length > 1}
                    onFieldChange={onFieldChange}
                    sectionTitle={sec.label}
                    key={index}
                  />
                </div>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </Waypoint>
  );
}

export default OHRIFormPage;
