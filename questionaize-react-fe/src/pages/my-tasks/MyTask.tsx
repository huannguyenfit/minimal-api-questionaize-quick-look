import NoContent from '@core/components/no-content/NoContent';

import React, { useState, useEffect } from 'react';
import { patients } from './patientsData';
import './MyTask.scss';
import { HtmlTooltip } from '@core/components/html-tooltip/HtmlTooltip';
import { Avatar, Grid, Skeleton } from '@mui/material';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { useTranslation } from 'react-i18next';
export const MyTasks = () => {
  const [results, setResults] = useState([...patients]);
  const [loading, setLoading] = useState(false);
const {t} = useTranslation()
  useEffect(() => {
    setTimeout(() => {
      setLoading(true)
    },
      1500)
  }, [])


  return (
    <>
      {/* <Card>
      <CardContent sx={{ textAlign: "center" }}>
        <Typography gutterBottom component="div" variant="h3">
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>
      </CardContent>
    </Card> */}
     {/* <Grid container spacing={2}>



     </Grid> */}
      <div className='pd-ltr-20 xs-pd-20-10'>
        <div className='row  mb-20'>
          <div className='col-md-6 col-sm-12'>
            <div className='title'>
              <h4>{t('myTask.title')}</h4>
            </div>
          </div>
        </div>
        <div className='row'>

          <div className="col-md-6 col-lg-5 col-sm-6 col-12" >
            <div className="card-box pd-30 pt-10 height-100-p">
              <h2 className="mb-30 h4">{t('myTask.patientAwaitingLabel')}</h2>

              <PerfectScrollbar style={{
                height: '660px'
              }}>
                {
                  !loading ? (
                    <>
                      <Skeleton sx={{ height: 100, borderRadius: '6px' }} className="mb-5" animation="wave" variant="rectangular" />
                      <Skeleton sx={{ height: 100, borderRadius: '6px' }} className="mb-5" animation="wave" variant="rectangular" />
                      <Skeleton sx={{ height: 100, borderRadius: '6px' }} className="mb-5" animation="wave" variant="rectangular" />
                      <Skeleton sx={{ height: 100, borderRadius: '6px' }} className="mb-5" animation="wave" variant="rectangular" />
                      <Skeleton sx={{ height: 100, borderRadius: '6px' }} className="mb-5" animation="wave" variant="rectangular" />
                      <Skeleton sx={{ height: 100, borderRadius: '6px' }} className="mb-5" animation="wave" variant="rectangular" />
                    </>
                  ) : <>
                    {results.length ? (
                      <>
                        <div className='content-div' >
                          {results.slice(0, 8).map((item: any, index: number) => {
                            return (
                              <HtmlTooltip
                                placement="right"
                                title={
                                  <div className='row'>
                                    <div className='col-4'>
                                      <span className='text-muted'>Huyết áp</span>
                                      <p style={{ fontWeight: 600 }}>33</p>
                                    </div>
                                    <div className='col-4'>
                                      <span className='text-muted'>Mạch</span>
                                      <p style={{ fontWeight: 600 }}>66</p>
                                    </div>
                                    <div className='col-4'>
                                      <span className='text-muted'>Cân nặng</span>
                                      <p style={{ fontWeight: 600 }}>66</p>
                                    </div>
                                    <div className="col-12">
                                      <span className='text-muted'>Tiền căng/Bệnh sử/Chẩn đoán trước</span>
                                      <p style={{ fontWeight: 600 }}>Từng điều trị tim</p>
                                    </div>
                                  </div>
                                }
                              >
                                <div className='row-card'>
                                  <div className='d-flex detail  align-items-center' style={{ gap: '10px' }}>
                                    <div style={{ fontSize: '20px', fontWeight: 600 }}>#{index + 1}</div>
                                    <Avatar className='avatar' sx={{ width: 56, height: 56 }} src={`https://i.pravatar.cc/150?img=${index + 1}`} />
                                    <div className='d-flex flex-column w-50' >
                                      <div style={{ fontWeight: 600 }}>{item.FullName}</div>
                                      <div>10/03/1985 (40 tuổi). Nữ</div>
                                      <div>
                                        Lý do khám: <label style={{ fontWeight: 600 }}>{item.Symptom}</label>
                                      </div>
                                    </div>
                                    <div className='d-flex flex-column'>
                                      <div>Giờ vào: </div>
                                      <div>{new Date().toLocaleDateString()}</div>
                                    </div>
                                    <div className="arrow-right"><ArrowForwardIosOutlinedIcon /></div>
                                  </div>
                                </div>
                              </HtmlTooltip>
                            );
                          })}
                        </div>
                      </>
                    ) : (
                      <NoContent />
                    )}
                  </>}
              </PerfectScrollbar>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};





//design template 2
// <div className='col-md-12 col-lg-12 col-sm-6 col-12'>
// <div className='title mb-3'>
//   <h6>Bệnh nhân chờ khám</h6>
// </div>
// {results.length ? (
//   <>
//     <div className='content-div' style={{ gap: '20px' }}>
//       {results.slice(0, 8).map((item: any, index: number) => {
//         return (
//           <div className='row-card d-flex ' style={{ width: '200px' }}>
//             <div className=' detail-2'>
//               <div className='d-flex  justify-content-between align-items-center'>
//                 <Avatar
//                   className='avatar'
//                   sx={{ width: 56, height: 56 }}
//                   src={`https://i.pravatar.cc/150?img=${index + 1}`}
//                 />
//                 <div style={{ fontSize: '20px', fontWeight: 600 }}>#{index + 1}</div>
//               </div>

//               <p className='mt-2' style={{ fontWeight: 600 }}>
//                 {item.FullName}
//               </p>

//               <div className='row'>
//                 <div className='col-12'>
//                   <span className='text-muted'>Năm sinh</span>
//                   <p>1985 - (40 tuổi)</p>
//                 </div>
//                 <div className='col-12'>
//                   <span className='text-muted'>Lý do khám</span>
//                   <p style={{ fontWeight: 600 }}>{item.Symptom}</p>
//                 </div>
//               </div>
//               <Link href='#'>Chi tiết</Link>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   </>
// ) : (
//   <NoContent />
// )}
// </div>