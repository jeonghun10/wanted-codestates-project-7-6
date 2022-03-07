import styled from 'styled-components';
import theme from '../styles/theme';
import { timeList, careTimeList } from '../constants/staticData';

const Schedule = () => {
  return (
    <ContainerStyled>
      <h2>돌봄 스케줄을 설정해주세요</h2>
      <InputWrapStyled>
        <CalendarWrapStyled>
          <div>시작일</div>
          <CalendarButton>
            <span>월 일</span>
            <span>아이콘</span>
          </CalendarButton>
        </CalendarWrapStyled>
        <CalendarWrapStyled>
          <div>종료일</div>
          <CalendarButton>
            <span>월 일</span>
            <span>아이콘</span>
          </CalendarButton>
        </CalendarWrapStyled>
      </InputWrapStyled>
      <SelectWrapStyled>
        <div>돌봄 시작 시간</div>
        <select name="돌봄 시작 시간">
          {timeList.map((el, idx) => {
            return <option key={idx}>{el.text}</option>;
          })}
        </select>
      </SelectWrapStyled>
      <SelectWrapStyled>
        <div>하루 돌봄 시간</div>
        <select name="" id="">
          {careTimeList.map((el, idx) => {
            return <option key={idx}>{el.text}</option>;
          })}
        </select>
      </SelectWrapStyled>
      <NoticeStyled>
        <p>하루 기본 3시간에서 12시간까지 선택가능합니다.</p>
      </NoticeStyled>
    </ContainerStyled>
  );
};

const ContainerStyled = styled.div`
  width: 768px;
  margin: 0 auto;
  color: ${theme.fontColor};
  font-weight: 600;
  letter-spacing: -1px;
  h2 {
    margin-bottom: 4em;
  }
`;
const InputWrapStyled = styled.div`
  display: flex;
`;
const CalendarWrapStyled = styled.div`
  width: 50%;
  margin-bottom: 4em;
  &: first-child {
    margin-right: 20px;
  }
`;
const CalendarButton = styled.div`
  backgound: ${theme.inputGray};
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 15px;
  &:hover {
    outline: 2px solid ${theme.fontColor};
    cursor: pointer;
  }
`;
const SelectWrapStyled = styled.div`
  margin-bottom: 4em;
  select {
    display: block;
    width: 100%;
    padding: 0.5em 0.7em;
    font-size: 1rem;
    font-weight: 400;
    color: ${theme.fontColor};
    border: 1px solid ${theme.inputGray};
    border-radius: 0.25rem;
  }
  select:focus {
    outline: 1px solid ${theme.fontColor};
  }
`;
const NoticeStyled = styled.div`
  background: rgb(244, 247, 255);
  padding: 1em;
  color: rgb(20, 27, 77);
`;

export default Schedule;
