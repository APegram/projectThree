import React from "react";
import { DataTable } from "re-pro";

class ProfileDataTable extends DataTable {
  componentWillReceiveProps(props) {
    this.setState({
      data: props.data
    });
  };
  render() {
    const {
      keyField,
      data,
      columns,
      config,
      striped,
      pagination,
      search
    } = this.props;
    return (
      <DataTable
      keyField={keyField}
      data={data}
      columns={columns}
      config={config}
      striped={striped}
      search={search}
      pagination={pagination}
      />
    );
  }
}


export default ProfileDataTable;
