function Dropdown() {
  return (
    <div class="header bg-gradient-primary md-8">
      <div class="container-fluid">
        <div class="header-body">
          <div class="row mb-3">
            <div class="col-sm-3">
              <select class="form-select p-2">
                <option>Select a date range</option>
                <option value="1">January</option>
                <option value="2">February</option>
                <option value="3">March</option>
                <option value="4">April</option>
                <option value="5">May</option>
                <option value="6">June</option>
                <option value="7" selected>
                  July
                </option>
                <option value="8">August</option>
                <option value="9">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dropdown;
