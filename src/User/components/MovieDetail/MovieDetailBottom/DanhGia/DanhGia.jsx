import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import avatar from "../../../../../assets/img/avatar.png";
import { useDispatch } from "react-redux";
import { Rate, Alert, Popover } from "antd";
import { Comment, Tooltip, List, Form, Button, Input, Avatar,InputNumber  } from "antd";
import moment from "moment";
import "./DanhGia.scss";
import ModalAntd from "../../../ModalAntd/ModalAntd";
import {
  closeModalAntd,
  handleOkModalAntdNoLodaing,
  openModalAntd,
  changeContentModalAntd,
} from "../../../../../Redux/actions/modal.action";
import { submitModalThunk } from "./../../../../../Redux/thunk/antdModal.thunk";
import { cancelModalAntd } from "./../../../../../Redux/actions/modal.action";
import DanhGiaClick from './DanhGiaClick';
import {NavLink } from "react-router-dom";

const { TextArea } = Input;

const data = [
  {
    actions: [<span key="comment-list-reply-to-0">Reply to</span>],
    author: "Minh Quân",
    avatar: "https://ui-avatars.com/api/?name=Quan",
    content: (
      <div className="cmt_content">
        <p className="cmt_content_text">
          We supply a series of design principles, practical patterns and high
          quality design resources (Sketch and Axure), to help people create
          their product prototypes beautifully and efficiently.
        </p>
        <Rate
          allowHalf
          disabled
          defaultValue={2.5}
          className="cmt_content_start"
        />
      </div>
    ),
  },
  {
    actions: [<span key="comment-list-reply-to-0">Reply to</span>],
    author: "Thanh Trúc",
    avatar: "https://ui-avatars.com/api/?name=Truc",
    content: (
      <div className="cmt_content">
        <p>
          We supply a series of design principles, practical patterns and high
          quality design resources (Sketch and Axure), to help people create
          their product prototypes beautifully and efficiently.
        </p>
        <Rate allowHalf disabled defaultValue={2.5} />
      </div>
    ),
  },
];

export default function DanhGia() {

  const {profile, isLoggedIn} = useSelector((state) => state.auth);


  const [state, setState] = useState({
    comments: [],
    submitting: false,
    value: "",
  });

  const dispatch = useDispatch();

  useEffect(async () => {
    await dispatch(
      handleOkModalAntdNoLodaing({
        submitCallback: handleSubmit,
      })
    );

    await dispatch(
      cancelModalAntd({
        cancelCallback: () => {
          dispatch(closeModalAntd());
        },
      })
    );

    // setTimeout(() => {
    //     dispatch(hideLoadingAntd())
    //   }, 3000);
    // dispatch(submitModalThunk({
    //     submitCallback: () => {
    //                 alert("submit đánh giá")
    //             }
    // }))
  }, [state.value]);

  useEffect(() => {
    dispatch(
      changeContentModalAntd({
        modalContent: (
          <Comment
            avatar={
              <Avatar
                src="https://ui-avatars.com/api/?name=Quan"
                alt="Han Solo"
              />
            }
            content={
              <Editor
                onChange={handleChange}
                onSubmit={handleSubmit}
                submitting={submitting}
                value={value}
              />
            }
          />
        ),
      })
    );
  }, [state.value]);

  const handleSubmit = () => {
    // console.log("vào hàm handleSubmit");
    console.log("state.value", state.value);
    if (!state.value) {
      // console.log("k có gtri value");
      return;
    }

    // console.log("có gtri value");
    setState({
      ...state,
      submitting: true,
    });

    setTimeout(() => {
      setState({
        ...state,
        submitting: false,
        value: "",
        comments: [
          ...state.comments,
          {
            author: profile.taiKhoan,
            avatar: `https://ui-avatars.com/api/?name=${profile.taiKhoan}`,
            content: (
              <div className="cmt_content">
                <p>{state.value}</p>
                <Rate allowHalf disabled defaultValue={2.5} />
              </div>
            ),
          },
        ],
      });
    }, 1000);
  };

  const handleChange = (e) => {
    // console.log("e.target.value", e.target.value);
    setState({
      ...state,
      value: e.target.value,
    });
  };

  const { comments, submitting, value } = state;
  // console.log("value", value);
  // console.log("comments", comments);

  return (
    <div className="danhgia custom_container">
    
    {
      isLoggedIn 
      ? 
      <ModalAntd
        componentClick= {<DanhGiaClick/>}
        htmlType="submit"
        flagLoading={true}
        disabledOkBtn={state.value === "" ? true : false}
        showModalFunc={async () => {
          await dispatch(
            openModalAntd({
              title: "Bạn nghĩ gì về phim này?",
              okButtonText: "Add comment",
              cancelButtonText: "Cancel comment",

            })
          );

          await dispatch(
            changeContentModalAntd({
              modalContent: (
                <Comment
                  avatar={
                    <Avatar
                      src={`https://ui-avatars.com/api/?name=${profile.taiKhoan}`}
                      alt={profile.taiKhoan}
                    />
                  }
                  content={
                    <Editor
                      onChange={handleChange}
                      onSubmit={handleSubmit}
                      submitting={submitting}
                      value={""}
                    />
                  }
                />
              ),
            })
          );
        }}
      />
      : 
      <Popover placement="topLeft" title={"Go to Login Page"} content={<NavLink to="/login" >Let's go</NavLink> }>
        <Alert message="Bạn cần đăng nhập để đánh giá ---> HOVER ME" type="error" />
      </Popover>
      
    }

      

    {comments.length > 0 && <CommentList comments={comments} />}


    </div>
  );
}

const CommentList = ({ comments }) => {
  return (
    <div className="comment_group">
      <List
        className="comment_list"
        header={<p className="cmt_quantity">{`${comments.length} replies`}</p>}
        itemLayout="horizontal"
        dataSource={comments}
        renderItem={(item) => (
          <li className="cmt_item">
            <Comment
              actions={item.actions}
              author={item.author}
              avatar={item.avatar}
              content={item.content}
            />
          </li>
        )}
      />
    </div>
  );
};

const Editor = ({ onChange, onSubmit, submitting, value }) => {
  console.log("value in Editor", value);
  return (
    <div>
      <Form.Item>
        <TextArea
          rows={4}
          onChange={onChange}
          value={value}
          placeholder="Bạn nghĩ gì về phim này?"
        />
      </Form.Item>

      {/* <Form.Item label="Số sao">
        <InputNumber min={1} max={10} defaultValue={7} />
      </Form.Item> */}
      
      {/* <Form.Item>
        <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
          Add Comment
        </Button>
      </Form.Item> */}
    </div>
  );
};
