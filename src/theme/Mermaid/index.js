import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import {
  MermaidContainerClassName,
  useMermaidSvg,
} from '@docusaurus/theme-mermaid/client';
import styles from './styles.module.css';

function MermaidDiagram({value}) {
  const mermaidConfigParam = { sequence: { showSequenceNumbers: false } };
  const svg = useMermaidSvg(value, mermaidConfigParam);
  return (
    <div
      className={`${MermaidContainerClassName} ${styles.container}`}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{__html: svg}}
    />
  );
}
export default function Mermaid(props) {
  return <BrowserOnly>{() => <MermaidDiagram {...props} />}</BrowserOnly>;
}
