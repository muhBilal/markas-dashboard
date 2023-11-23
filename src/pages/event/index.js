import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import Axios from "axios";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Swal from "sweetalert2";

const Index = () => {
  const [albums, setAlbums] = React.useState([]);
  const [render, setRender] = React.useState(false);
  const [show, setShow] = useState(false);
  const [modalId, setModalId] = useState("");
  const [albumName, setAlbumName] = useState("");
  const handleClose = () => {
    setShow(false);
    // window.location.reload();
  };
  const handleShow = (id) => {
    setShow(true);
    setModalId(id);
  };

  const getRegional = async () => {
    const response = await Axios.get(process.env.NEXT_PUBLIC_API_URL + "admin/event_album");
    const { data } = response.data;
    setAlbums([]);
    setAlbums(data);
  };

  const handleDelete = async (id) => {
    await Axios.delete(process.env.NEXT_PUBLIC_API_URL + "admin/event_album/" + id);
    setRender(!render);
    Swal.fire(
      'Sukses!',
      'Data berhasil dihapus!',
      'success'
    )
  };

  const handleUpdate = async () => {
    console.log(albumName);
    await Axios.put(process.env.NEXT_PUBLIC_API_URL + "admin/event_album/" + modalId, {
      name: albumName
    });
    handleClose()
    setAlbums('')
    setRender(!render);
  };

  const handleCreateRegional = async () => {
    await Axios.post(process.env.NEXT_PUBLIC_API_URL + "admin/event_album", {
      name: albumName
    });
    setRender(!render);
    setAlbumName()
    Swal.fire(
      'Sukses!',
      'Data berhasil ditambahkan!',
      'success'
    )
  }
  useEffect(() => {
    getRegional();
  }, [render]);
  return (
    <Layout>
      <a className="btn btn-default icon-edit hover-up mb-4" data-bs-toggle="modal" data-bs-target="#exampleModal">Tambah Album</a>
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <label className="form-label" htmlFor="input-1">Nama Album</label>
                <input className="form-control" id="input-1" type="text" required="" name="fullname" onChange={(e) => {
                  setAlbumName(e.target.value);
                }} />
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={handleCreateRegional}>Save changes</button>
            </div>
          </div>
        </div>
      </div>

      <div className="section-box">
        <div className="container">
          <div className="panel-white">
            <div className="panel-head">
              <h5>Event Album</h5>
            </div>

            <div className="panel-body">
              {albums?.map((item, index) => (
                <div className="card-style-2 hover-up">
                  <h6 className={`mx-3`}>{index + 1}</h6>
                  <div className="card-head">
                    <div className="card-title">
                      <h6>{item.name}</h6>
                    </div>
                  </div>
                  <div className="card-price d-flex gap-3 align-items-center">
                    <Button variant="warning" onClick={() => handleShow(item.id)}>
                      Edit
                    </Button>
                    <button className="btn btn-danger" onClick={() => handleDelete(item.id)}>Hapus</button>
                    <Modal
                      centered
                      show={
                        show && modalId === item.id
                      }
                      onHide={handleClose}
                    >
                      <Modal.Header closeButton>
                        <Modal.Title>Update Lokasi {item.name}</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <div className="form-group">
                          <label className="form-label" htmlFor="input-1">Nama Lokasi</label>
                          <input className="form-control" id="input-1" type="text" required="" name="fullname"
                                 defaultValue={item.name} onChange={(e) => {
                            setAlbumName(e.target.value);
                          }} />
                        </div>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                          Close
                        </Button>
                        <Button variant="primary" onClick={handleUpdate}>
                          Save Changes
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </Layout>
  );
};

export default Index;