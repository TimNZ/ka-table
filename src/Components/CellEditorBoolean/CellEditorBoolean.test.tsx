import React from 'react';
import ReactDOM from 'react-dom';

import { DataType } from '../../Enums/DataType';
import { ICellEditorProps } from '../CellEditor/CellEditor';
import CellEditorString from './CellEditorBoolean';

const props: ICellEditorProps = {
  column: {
    dataType: DataType.String,
    field: 'columnField',
    title: 'Field',
  },
  onChangeToText: () => {},
  onValueChange: () => {},
  rowData: { column : 1 },
};

it('renders without crashing', () => {
  const element = document.createElement('td');
  ReactDOM.render(<CellEditorString {...props} />, element);
  ReactDOM.unmountComponentAtNode(element);
});
