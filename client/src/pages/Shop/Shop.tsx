import Genrebar from "../../components/Genrebar";
import styles from "./Shop.module.css"

function Shop() {
  return (
    <div className="container py-4">
      <div className="row g-4">
        <aside className="col-12 col-md-3 col-lg-2">
          <Genrebar />
        </aside>

        <main className="col-12 col-md-9 col-lg-10">
          <div className="row g-3">
            <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
              <div className="card h-100">
                <img
                  src="https://picsum.photos/600/400?1"
                  className="card-img-top"
                  alt="item"
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">Vinyl 1</h5>
                  <p className="card-text text-muted mb-3">
                    Artist Name.
                  </p>
                  <div className="mt-auto d-flex justify-content-between align-items-center">
                    <span className="fw-bold">37 990 ₸</span>
                    <a href="#" className="btn btn-primary btn-sm">
                      Details
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Item */}
            <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
              <div className="card h-100">
                <img
                  src="https://picsum.photos/600/400?2"
                  className="card-img-top"
                  alt="item"
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">Vinyl 2</h5>
                  <p className="card-text text-muted mb-3">
                    Artist name
                  </p>
                  <div className="mt-auto d-flex justify-content-between align-items-center">
                    <span className="fw-bold">25 990 ₸</span>
                    <a href="#" className="btn btn-primary btn-sm">
                      Details
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 🔹 PAGINATION */}
          <nav className="mt-4">
            <ul className="pagination justify-content-center">
              <li className="page-item disabled">
                <a className="page-link" href="#">
                  Назад
                </a>
              </li>
              <li className="page-item active">
                <a className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  Вперёд
                </a>
              </li>
            </ul>
          </nav>
        </main>
      </div>
    </div>
  );
}

export default Shop;
