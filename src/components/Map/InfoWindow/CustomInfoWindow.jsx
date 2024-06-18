const CustomWindow = ({ title, id, ReviewCount, Rating }) => {
    const htmlString = `
          <div style="
              display: inline-flex;
              justify-content: center;
              align-items: center;
              box-shadow: 0rem 0.25rem 0.25rem 0rem rgba(0, 0, 0, 0.25);
              border-radius: 0rem 0rem 0.625rem 0.625rem;
          ">
              <div style="
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                  align-items: center;
                  gap: 0.359rem;
                  background: #FFF;
              ">
                  <div style="
                      width: 8.889rem;
                      height: 13.800rem;
                      border-radius: 0.438rem 0.438rem 0rem 0rem;
                      border: 0.073rem solid #76C7B7;
                      background: 'transparent';
                  ">
                      <div style="
                          display: flex;
                          width: 8.889rem;
                          height: 13.800rem;
                          padding-top: 0.143rem;
                          flex-direction: column;
                          justify-content: center;
                          align-items: center;
                          position: absolute;
                          left: -0.063rem;
                          top: -0.143rem;
                      ">
                          <div style="
                              flex: 1 0 0;
                              width: fill-parent;
                              align-self: stretch;
                              border-radius: 0.438rem 0.438rem 0rem 0rem;
                              border-bottom: 0.075rem solid #76C7B7;
                              background-size: contain;
                              background: url('https://raw.githubusercontent.com/Pure-Plate/DB-Photo/main/images/${id}.jpg') center / auto 100% no-repeat;;
                          ">
                          </div>
                          <div style="
                              display: flex;
                              padding: 0.359rem 0rem;
                              padding-bottom: 0.625rem;
                              flex-direction: column;
                              justify-content: center;
                              align-items: center;
                          ">
                              <div style="
                                  display: flex;
                                  padding: 0.359rem 0rem;
                                  flex-direction: column;
                                  justify-content: center;
                                  align-items: center;
                              ">
                                  <h3 style="
                                  color: #3E4958;
                                  text-align: center;
                                  font-family: 'Anek Bangla';
                                  font-size: 1.035rem;
                                  font-style: normal;
                                  font-weight: 800;
                                  line-height: 149.8%; 
                                  padding-left: 0.625rem; 
                                  padding-right: 0.625rem;
                                  word-wrap: break-word;
                              ">${title}</h3>
                              </div>
                              <div style="
                                  display: flex;
                                  align-items: center;
                                  gap: 0.466rem;
                              ">
                                  <h1 style="
                                      color: #3E4958;
                                      font-family: 'Anek Bangla';
                                      font-size: 0.776rem;
                                      font-style: normal;
                                      font-weight: 300;
                                      line-height: normal;
                                  ">★${Rating}</h1>
                                  <div style="
                                      width: 0.065rem;
                                      height: 1.229rem;
                                      border: 0.065rem solid #E0E0E0;
                                      background: rgba(189, 189, 189, 0.50);
                                  "></div>
                                  <h1 style="
                                      color: #3E4958;
                                      font-family: 'Anek Bangla';
                                      font-size: 0.776rem;
                                      font-style: normal;
                                      font-weight: 300;
                                      line-height: normal;
                                  ">${ReviewCount} ${ReviewCount === 1 ? 'Review' : 'Reviews'}</h1>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      `;
  
    return htmlString;
  };
  
  export default CustomWindow;
  