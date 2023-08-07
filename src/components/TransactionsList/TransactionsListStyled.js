import { styled } from 'styled-components';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';

export const Table = styled.table`
  margin-top: 46px;
  width: 100%;
  height: 356px;
  overflow-y: auto;
`;
export const TableHead = styled.thead`
  background-color: rgba(81.88, 59, 126.44, 0.8);
`;
export const HeadRow = styled.tr`
  display: grid;
  grid-template-columns: 1.2fr 0.8fr 1.2fr 1.7fr 0.7fr 0.4fr 0.6fr;
  width: 100%;
  color: #fbfbfb;
  padding-left: 20px;
  padding-top: 16px;
  padding-bottom: 16px;
  border-radius: 8px;
  box-shadow: 0px 4px 60px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(100px);
  overflow-y: auto;
`;
export const HeadTitle = styled.th`
  font-weight: 600;
  font-size: 16px;
  color: #fbfbfb;
  text-align: left;
`;
export const TableBody = styled.tbody`
  display: block;
`;
export const TableRow = styled.tr`
  border-top: none;
  font-size: 14px;
  color: #fbfbfb;
  font-weight: 400;
  text-align: left;
  position: relative;
  padding-left: 20px;
  margin: 0;
  display: grid;
  grid-template-columns: 1.4fr 0.6fr 1.2fr 1.7fr 0.7fr 0.4fr 0.1fr;
  width: 100%;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);

  &:after {
    position: absolute;
    bottom: 0;
    left: 0;
    content: '';
    width: 100%;
    height: 1px;
  }
`;
export const TableInfo = styled.td``;
export const BtnCont = styled.td`
  width: 100%;
  display: flex;
  border-top: none;
  text-align: right;
  justify-content: center;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  gap: 8px;
`;
export const BtnEdit = styled.button`
  background-color: transparent;
  border: none;
`;
export const BtnIcon = styled(ModeEditOutlineOutlinedIcon)`
  color: #ffffff8f;
  transition: 250ms;
  &:active,
  &:focus,
  &:hover {
    color: #ffffffc4;
    cursor: pointer;
    transition: 250ms;
    transform: scale(1.1);
  }
`;
export const BtnDelete = styled.button`
  text-align: center;
  color: #fbfbfb;
  font-size: 14px;
  font-weight: 400;
  width: 100%;
  height: 100%;
  padding: 5px 12px;
  background: linear-gradient(
    167deg,
    #ffc727 0%,
    #9e40ba 61.46%,
    #7000ff 90.54%
  );
  box-shadow: 1px 9px 15px rgba(0, 0, 0, 0.2);
  border: none;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  gap: 2px;
  display: inline-flex;
  transition: 250ms;
  &:active,
  &:focus,
  &:hover {
    cursor: pointer;
    background: linear-gradient(97deg, #ffc727 0%, #9e40ba 61%, #7000ff 91%);
    box-shadow: 1px 5px 8px 0px rgba(0, 0, 0, 0.5);
    transition: 250ms;
    transform: scale(1.03);
    outline: none;
  }
`;
