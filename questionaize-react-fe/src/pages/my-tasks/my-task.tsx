import NoContent from '@core/controls/no-content/no-content';
import Paginator from '@core/controls/paginator/paginator';
import RowCard from '@core/controls/row-card/row-card';
import { defaultCriteria, SearchCriteriaReq } from '@core/models/common/search-criteria';
import { MedicalExam } from '@core/models/patients/medical-exam';
import { Avatar } from '@mui/material';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { patients } from './patients-data';
import { Link } from '@mui/material';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import './my-task.scss';
export const MyTasks = () => {
  const { t } = useTranslation();
  const [results, setResults] = useState([...patients]);
  const [criteria, setCriteria] = useState<SearchCriteriaReq>({ ...defaultCriteria });

  const handleChangPage = async (page: number) => {
    const crit = { ...criteria, page };
    searchPatient(crit);
    setCriteria(crit);
  };

  const searchPatient = (criteria: SearchCriteriaReq) => {
    var res = [...patients];
    setResults(res);
  };
  const renderItem = (item: any) => (
    <>
      <Avatar className='avatar' src={item.Avatar} />
      <div className='d-flex flex-column'>
        <div>{item.FullName}</div>
        <div>{item.Symptom}</div>
      </div>
    </>
  );
  return (
    <>
      <div className='pd-ltr-20 xs-pd-20-10'>
        <div className='row'>
          <div className='col-md-6 col-sm-12'>
            <div className='title mb-5'>
              <h4>Công việc của tôi</h4>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-6 col-lg-5 col-sm-6 col-12'>
            <div className='title mb-3'>
              <h6>Bệnh nhân chờ khám</h6>
            </div>
            {results.length ? (
              <>
                <div className='content-div' >
                  {results.slice(0, 8).map((item: any, index: number) => {
                    return (
                      <div className='row-card'>
                        <div className='d-flex detail shadow align-items-center' style={{gap:'10px'}}>
                          <div style={{fontSize:'20px', fontWeight: 600}}>#{index + 1}</div>
                          <Avatar className='avatar' sx={{ width: 56, height: 56 }} src={`https://i.pravatar.cc/150?img=${index + 1}`} />
                          <div className='d-flex flex-column w-50' >
                            <div style={{fontWeight: 600}}>{item.FullName}</div>
                            <div>10/03/1985 (40 tuổi). Nữ</div>
                            <div>
                              Lý do khám: <label style={{fontWeight:600}}>{item.Symptom}</label>
                            </div>
                          </div>
                          <div className='d-flex flex-column'>
                            <div>Giờ vào: </div>
                            <div>{new Date().toLocaleDateString()}</div>
                          </div>
                          <div  className="arrow-right"><ArrowForwardIosOutlinedIcon/></div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </>
            ) : (
              <NoContent />
            )}
          </div>
          {/* <div className='col-md-12 col-lg-12 col-sm-6 col-12'>
            <div className='title mb-3'>
              <h6>Bệnh nhân chờ khám</h6>
            </div>
            {results.length ? (
              <>
                <div className='content-div' style={{ gap: '20px' }}>
                  {results.slice(0, 8).map((item: any, index: number) => {
                    return (
                      <div className='row-card d-flex ' style={{ width: '200px' }}>
                        <div className=' detail-2'>
                          <div className='d-flex  justify-content-between align-items-center'>
                            <Avatar
                              className='avatar'
                              sx={{ width: 56, height: 56 }}
                              src={`https://i.pravatar.cc/150?img=${index + 1}`}
                            />
                            <div style={{ fontSize: '20px', fontWeight: 600 }}>#{index + 1}</div>
                          </div>

                          <p className='mt-2' style={{ fontWeight: 600 }}>
                            {item.FullName}
                          </p>

                          <div className='row'>
                            <div className='col-12'>
                              <span className='text-muted'>Năm sinh</span>
                              <p>1985 - (40 tuổi)</p>
                            </div>
                            <div className='col-12'>
                              <span className='text-muted'>Lý do khám</span>
                              <p style={{ fontWeight: 600 }}>{item.Symptom}</p>
                            </div>
                          </div>
                          <Link href='#'>Chi tiết</Link>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </>
            ) : (
              <NoContent />
            )}
          </div> */}
        </div>
      </div>
    </>
  );
};
