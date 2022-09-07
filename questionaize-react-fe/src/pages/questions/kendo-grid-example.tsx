import { Badge, Breadcrumb, Button, Col, Row, Space, Table } from 'antd';
import React, { useEffect, useState } from 'react';
import { RouteChildrenProps } from 'react-router';
import { useTranslation } from 'react-i18next';
import './@styles/question-list.scss';
import { TypeInputEnum } from '@core/utils/enums';
import { Subject } from 'rxjs';
import { useDispatch, useSelector } from 'react-redux';
import { getQuestionAction } from '@core/+state/actions/question-action';
import { Grid, GridColumn as Column, GridCell, GridToolbar } from '@progress/kendo-react-grid';
import { Tooltip } from '@progress/kendo-react-tooltip';
import * as _moment from 'moment';
import mock from './data.json'
import dropdownlistData from './dropdown.json'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import { ComboBox, DropDownList } from '@progress/kendo-react-dropdowns';
import { NumericTextBox } from '@progress/kendo-react-inputs';
import { GridColumn } from '@progress/kendo-react-grid';
import { DatePicker } from '@progress/kendo-react-dateinputs';

interface Props extends RouteChildrenProps { }

export function KendoGridComponent(props: Props) {
  const editField = "inEdit";
  const [currentPage, setCurrentPage] = useState(1);
  const [skipPage, setSkipPage] = useState(0);
  const [datas, setDatas] = useState<any>(undefined);
  const [dropdown, setDropdown] = useState<any>(undefined);
  const [editID, setEditID] = React.useState(null);

  useEffect(() => {
    setDatas([...mock])
    setDropdown([...dropdownlistData])
  }, []);
  const itemChange = (event) => {
    const field = event.field || "";
    const newData = datas.map((item) =>
      item.id === event.dataItem.id
        ? { ...item, [field]: event.value }
        : item
    );
    setDatas(newData);
  };

  const columns = [
    {
      field: "first_name", title: "Full name",  width: 200
    },
    {
      field: "date", title: "Date",  width: 200, cell: (props: any) => {
        return (
          <td>
            {props.dataItem.inEdit ? (
              <DatePicker
                value={new Date(props.dataItem.date)} 
                onChange={(e) => dateChange(e, props)}
              />
            ) : (

              props.dataItem.date ? 
              new Date(props.dataItem.date).toDateString() : ""
            )}
          </td>
        );
      }
    },
    {
      field: "gender", title: "Gender", width: 200, cell: (props: any) => {
        return (
          <td>
            {props.dataItem.inEdit ? (
              <DropDownList
                style={{
                  width: "200px",
                }}
                onChange={(e) => onDropdownChange(e, props)}
                value={dropdown.filter((c) => c.name === props.dataItem.gender)[0]}
                data={dropdown} key="list" textField='name'
              />
            ) : (
              props.dataItem.gender
            )}
          </td>
        );
      }
    },
    {
      field: "Price",  title: "Price", width: 200,  editor:"numeric" 
    },
    { field: "email", title: "Email"},

    {
      title: "#", width: 230, cell: (props: any) => {
        const { dataItem } = props;
        const inEdit = dataItem.inEdit;
        const isNewItem = dataItem.id === undefined;
        return inEdit ? (
          <td className="k-command-cell" style={{ display:'flex'}}>
            <Button
              type="primary"
              onClick={() =>
                isNewItem ? addItem(dataItem) : updateItem(dataItem)
              }
            >
              {isNewItem ? "Add" : "Update"}
            </Button>
            <Button
             type="default"
              onClick={() =>
                isNewItem ? discardItem(dataItem) : cancelItem(dataItem)
              }
            >
              {isNewItem ? "Discard" : "Cancel"}
            </Button>
          </td>
        ) : (
          <td className="k-command-cell">
            <Button
             type="default"

              onClick={() => enterEdit(dataItem)}
            >
              Edit
            </Button>
          </td>
        );
      }
    }
  ] as any;

  const dateChange = (e, props) => {
    if (props.onChange) {
      props.onChange({
        dataIndex: 0,
        dataItem: props.dataItem,
        field: props.field,
        syntheticEvent: e.syntheticEvent,
        value: e.target.value,
      });
    }
  }
  const onDropdownChange = (e, props) => {
    console.log(e, {
      dataIndex: 0,
      dataItem: props.dataItem,
      field: props.field,
      syntheticEvent: e.syntheticEvent,
      value: e.value,
    })
    if (props.onChange) {
      props.onChange({
        dataIndex: 0,
        dataItem: props.dataItem,
        field: props.field,
        syntheticEvent: e.syntheticEvent,
        value: e.value.list,
      });
    }
  };


  const generateId = (datas) => datas.reduce((acc, current) => Math.max(acc, current.id), 0) + 1;

  const enterEdit = (dataItem) => {
    let newData = datas.map((item) =>
      item.id === dataItem.id ? { ...item, inEdit: true } : item
    );
    setDatas(newData);
  };
  const addItem = (dataItem) => {
    const newData = [...datas];
    dataItem.inEdit = true;
    dataItem.id = generateId(dataItem);
    newData.unshift(dataItem);
    console.log(newData);
    setDatas(newData);
  };

  const updateItem = (dataItem) => {
    console.log(dataItem)
    dataItem.inEdit = false;
    let index = datas.findIndex((record) => record.id === dataItem.id);
    datas[index] = dataItem;
    setDatas([...datas])
  }; 

  const discardItem = (dataItem) => {
    const newData = [...datas];
    newData.splice(0, 1);
    setDatas(newData);
  };

  const cancelItem = (dataItem) => {
    const originalItem = [...mock].find(
      (p) => p.id === dataItem.id
    );
    const newData = datas.map((item) =>
      item.id === originalItem.id ? originalItem : item
    );
    setDatas(newData);
  };
  const loadingPanel = (
    <div className="k-loading-mask">
      <span className="k-loading-text">Loading</span>
      <div className="k-loading-image"></div>
      <div className="k-loading-color"></div>
    </div>
  );
  const closeEdit = (event) => {
    if (event.target === event.currentTarget) {
      setEditID(null);
    }
  };
  const addRecord = () => {
    const newRecord = {
      id: datas.length + 1,
      inEdit: true,
      date: new Date()
    };
    setDatas([newRecord, ...datas]);
    setEditID(newRecord.id);
  };
  return (
    <>

      <div className='candidate-list page-content employee'>
        <div className='list-header'>
          <Row>
            <Col span={12}>
              <h1 className='page-title'>{Grid}</h1>
            </Col>

          </Row>
        </div>
        {datas == undefined && loadingPanel}
        <Grid
          editField={editField}
          style={{ height: `600px` }}
          data={datas}
          skip={0}
          dataItemKey={"id"}
          onItemChange={itemChange}
          pageSize={50}
          total={datas?.length}
          pageable={true}
          >
          <GridToolbar>
            <div onClick={closeEdit}>
              <button
                title="Add new"
                className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-primary"
                onClick={addRecord}
              >
                Add new
              </button>
            </div>
          </GridToolbar>
          {
            columns.map((column: any, index: any) => {
              return <Column field={column.field} width={column.width} title={column.title} editor={column.editor} key={index} cell={column.cell} />
            })
          }

        </Grid>
      </div>
    </>

  );
}
