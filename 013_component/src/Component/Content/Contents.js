import React, { Component } from 'react';



class Contents extends Component {
    constructor(props)
    {
        super(props);
    }

    thongbao = () => {alert('Cach xu ly thao tac trong react js ');}

    thongbao2 = () => {alert('thong bao so 2')}

    render() {
        return (
            <section>
                <div className="col-lg-4">
                <div className="row">
                    <div className="col-lg-5">
                    <div className="p-1">
                        <img className="img-fluid rounded-circle" src={this.props.anh} alt />
                    </div>
                    </div>
                    <div className="col-lg-7">
                    <div className="p-1">
                        <h2 className="display-4">{this.props.tieude}</h2>
                        <p>
                            {this.props.trichdan}
                        </p>
                        <div className="row">
                            <div className="btn btn-info" onClick={this.thongbao}>Edit</div>
                            <div className="btn btn-warning" onClick={this.thongbao2}>Remove</div>
                            
                          </div>
                          <hr />
                        </div>
                    </div>
                </div>
            </div>
      </section>
        );
    }
}

export default Contents;